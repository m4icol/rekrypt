import MethodList from "../api/MethodsList";
import AddKrypt from "../components/AddKrypt";

interface SidebarProps {
  selectedMethods: string[];
  onMethodsChange: (methods: string[]) => void;
}

function Sidebar({ selectedMethods, onMethodsChange }: SidebarProps) {
  return (
    <section className="w-160 py-11 scroll-bar-custom overflow-y-auto overflow-x-hidden items-center flex flex-col justify-between bg-sidebar gap-20">
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-bold text-center">REKRYPT</h1>
        <MethodList
          selectedMethods={selectedMethods}
          onMethodsChange={onMethodsChange}
        ></MethodList>
      </div>
      <AddKrypt></AddKrypt>
    </section>
  );
}

export default Sidebar;
