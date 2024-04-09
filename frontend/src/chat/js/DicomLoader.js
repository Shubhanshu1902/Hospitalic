import React, { useEffect, useRef, useState } from "react";
import cornerstone from "cornerstone-core";
import dicomParser from "dicom-parser";
import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";

cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

export const DicomLoader = () => {
    const [a,setA] = useState(0);
    const divRef = useRef();
    const cvsRef = useRef();

    useEffect(() => {
        divRef.current = document.createElement("div");
        divRef.current.style.width = 300;
        divRef.current.style.height = 300;
        console.log(divRef.current);
        cornerstone.enable(divRef.current);
        cvsRef.current = divRef.current.getElementsByTagName("canvas")[0];
        cvsRef.current.width = 500;
        cvsRef.current.height = 500;
        cvsRef.current.style.width = "700px";
        cvsRef.current.style.height = "700px";
        cornerstone
          .loadImage(
            "wadouri:https://raw.githubusercontent.com/cornerstonejs/cornerstoneWADOImageLoader/master/testImages/CT2_J2KR"
          )
          .then(image => {
            console.log(image);
    
            cornerstone.displayImage(divRef.current, image);
    
            const viewport = {
              invert: false,
              pixelReplication: false,
              voi: {
                windowWidth: 400,
                windowCenter: 200
              },
              scale: 1,
              translation: {
                x: 0,
                y: 0
              }
              // colormap: "hot"
            };
    
            cornerstone.setViewport(divRef.current, viewport);
            cornerstone.updateImage(divRef.current);
            console.log(
              cvsRef.current.getContext("2d").getImageData(250, 250, 10, 10)
            );
            setA(2);
          });
      }, []);
    
      setTimeout(() => {
        console.log(
          cvsRef.current &&
            cvsRef.current.getContext("2d").getImageData(250, 250, 10, 10)
        );
      }, 1000);
    
      return (
        (divRef.current && (
          <div
            ref={node => {
              node.appendChild(divRef.current);
            }}
          />
        )) ||
        null
      );
};