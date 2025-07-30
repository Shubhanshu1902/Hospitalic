sequenceDiagram
    participant U as User
    participant F as Frontend
    participant B as Backend
    participant DB as Database
    participant JWT as JWT Filter
    participant SC as Security Chain
    participant AM as Authorization Manager

    Note over U,DB: LOGIN FLOW
    U->>F: Enter credentials
    F->>B: POST /api/auth/login
    Note right of B: AuthController.login()
    B->>B: AuthenticationManager.authenticate()
    B->>DB: Validate credentials
    DB-->>B: User details with roles
    B->>B: JWTGenerator.generateToken()
    Note right of B: Create JWT with:<br/>- username<br/>- roles<br/>- userId<br/>- expiration
    B->>DB: saveToken(token)
    B-->>F: Return JWT token
    F->>F: localStorage.setItem('jwt-token')
    F-->>U: Login successful

    Note over U,DB: PROTECTED REQUEST FLOW
    U->>F: Access protected resource
    F->>F: retrieveJWT()
    F->>B: GET/POST with Authorization header
    Note right of F: Authorization: Bearer {token}
    B->>JWT: JWTAuthenticationFilter
    JWT->>JWT: Extract token from header
    JWT->>B: JWTGenerator.validateToken()
    B->>DB: TokenService.isValid(token)
    DB-->>B: Token valid/invalid
    alt Token Valid
        JWT->>B: Set SecurityContext with roles
        B->>SC: Security Chain Validation
        Note right of SC: @PreAuthorize/@Secured<br/>@RolesAllowed annotations
        SC->>AM: AuthorizationManager.check()
        AM->>AM: Validate user roles against<br/>required permissions
        alt User has required role
            AM-->>SC: Access granted
            SC-->>B: Continue to endpoint
            B-->>F: Protected resource
            F-->>U: Resource accessed
        else User lacks required role
            AM-->>SC: Access denied
            SC-->>B: 403 Forbidden
            B-->>F: 403 Forbidden
            F-->>U: Access denied
        end
    else Token Invalid
        B-->>F: 401 Unauthorized
        F-->>U: Access denied
    end

    Note over U,DB: ROLE-BASED AUTHORIZATION FLOW
    Note right of SC: Security Chain validates:<br/>- @PreAuthorize("hasRole('ADMIN')")<br/>- @PreAuthorize("hasAuthority('READ')")<br/>- @Secured({"ROLE_USER", "ROLE_ADMIN"})<br/>- @RolesAllowed({"USER", "ADMIN"})
    Note right of AM: AuthorizationManager checks:<br/>- User's granted authorities<br/>- Required permissions<br/>- Role hierarchy<br/>- Custom authorization logic

    Note over U,DB: LOGOUT FLOW
    U->>F: Click logout
    F->>B: POST /api/auth/logout
    Note right of B: AuthController.logout()
    B->>DB: TokenService.logout(token)
    DB->>DB: Delete token from database
    B-->>F: Logout successful
    F->>F: localStorage.removeItem('jwt-token')
    F-->>U: Logged out

    Note over U,DB: TOKEN EXPIRATION
    Note right of JWT: If token expired:<br/>- JWTGenerator.validateToken()<br/>- throws AuthenticationCredentialsNotFoundException<br/>- Returns 401 Unauthorized

    Note over U,DB: SECURITY CHAIN VALIDATION
    Note right of SC: Security Chain includes:<br/>- Method Security<br/>- URL-based Security<br/>- Custom Security Filters<br/>- Role-based Access Control<br/>- Permission-based Authorization
