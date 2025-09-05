import { AdminTopbar } from "@repo/ui/adminTopbar";
import { CollectionTopbar } from "@repo/ui/collectionTopbar";


export default function ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }> ){

    return (
      <div className="h-full ">
        <AdminTopbar/>
        {children}
      </div>
    )
}