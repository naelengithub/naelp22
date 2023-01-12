// import * as React from "react";
// import { useWindowSize } from "../../../../../hooks/useWindowSize";
// import Image from "next/image";

// export interface EstuarioProps {
//   className?: string;
// }

// /**
//  * @name Estuario
//  * @description Estuario desktop on hover information component.
//  */
// export const Estuario = (props: EstuarioProps) => {
//   const { className } = props;

//   const size = useWindowSize();
//   const screenWidthSize = size.width;

//   if (!screenWidthSize) {
//     return null;
//   } else {
//     return (
//       <div>
//         <div
//           //CONTAINER
//           style={{
//             boxSizing: "border-box",
//             backgroundColor: "white",
//             display: "flex",
//             alignItems: "end",
//             position: "absolute",
//             top: "0",
//             left: screenWidthSize / 10,
//             width: (screenWidthSize / 10) * 9,
//             height: (screenWidthSize / 10) * 3.5,
//             zIndex: "1",
//           }}
//         >
//           {/* <div
//             style={{
//               position: "relative",
//               width: (screenWidthSize / 10) * 3,
//               height: (screenWidthSize / 10) * 2.5,
//             }}
//           >
//             <Image
//               src="/estuario/103.png"
//               alt="Birds eye view of the project."
//               layout="fill"
//             />
//           </div> */}
//           <div
//             style={{
//               backgroundColor: "cornflowerblue",
//             }}
//           >
//             <div
//             //text
//             >
//               <p
//                 style={{ textAlign: "right", margin: "0", paddingTop: "1rem" }}
//               >
//                 _2018_Pijijiapan Chiapas, Mexico
//                 <br />
//                 __collaboration with Ana Luceo Villaseñor, and Angélica Mota.
//               </p>
//             </div>
//             <div
//               style={{
//                 position: "relative",
//                 width: (screenWidthSize / 10) * 6,
//                 height: (screenWidthSize / 10) * 4.5,
//               }}
//             >
//               <Image
//                 src="/estuario/101.png"
//                 alt="Birds eye view of the project."
//                 layout="fill"
//               />
//             </div>
//           </div>
//           <div
//             style={{
//               backgroundColor: "white",
//               width: screenWidthSize / 10,
//             }}
//           >
//             <h1
//               style={{
//                 fontSize: "90px",
//                 margin: "0",
//                 writingMode: "vertical-rl",
//               }}
//             >
//               estuario
//             </h1>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };

import * as React from "react";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import Image from "next/image";

export interface EstuarioProps {
  className?: string;
  style?: any;
}

/**
 * @name Estuario
 * @description Estuario desktop on hover details component.
 */
export const Estuario = (props: EstuarioProps) => {
  const { className, style } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div
        //CONTAINER
        style={{
          boxSizing: "border-box",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: -(screenWidthSize / 10) * 2,
          left: screenWidthSize / 10,
          zIndex: 20,
        }}
      >
        <div
          style={{
            height: screenWidthSize / 10,
            display: "flex",
            alignItems: "end",
          }}
        >
          <h1
            style={{
              fontSize: "90px",
              margin: "0",
              textAlign: "end",
            }}
          >
            estuario
          </h1>
        </div>
        <div>
          <div
            style={{
              position: "relative",
              width: (screenWidthSize / 10) * 5,
              height: (screenWidthSize / 10) * 3.5,
            }}
          >
            <Image
              src="/estuario/101.png"
              alt="3D render of project farming section."
              layout="fill"
            />
          </div>
        </div>
        <div
          style={{ height: (screenWidthSize / 10) * 0.5, alignItems: "center" }}
        >
          <p style={{ marginBottom: "0" }}>
            _2018_Pijijiapan Chiapas, Mexico
            <br />
            _colaboration with Ana Lucero
            <br />
            Villaseñor and Angélica Mota
          </p>
        </div>
      </div>
    );
  }
};
