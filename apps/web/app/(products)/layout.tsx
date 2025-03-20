import { CollectionTopbar } from "@repo/ui/collectionTopbar";
import { ReactNode } from "react";


export default function ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }> ){

    return (
      <div className="h-full ">
        <CollectionTopbar/>
        {children}
      </div>
    )
}