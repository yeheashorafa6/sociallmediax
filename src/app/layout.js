import "./globals.css";
import LeftBar from "@/components/LeftBar/LeftBar";
import RightBar from "@/components/RightBar/rightBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex justify-between">
          <div className="px-2 xs:px-4 xxl:px-8  ">
            <LeftBar/>
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray ">{children}</div>
          <div className=" hidden lg:flex ml-4 md:ml-8 flex-1">
            <RightBar/>
          </div>
        </div>
      </body>
    </html>
  );
}
