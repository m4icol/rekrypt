import MethodList from "../api/MethodsList";

interface SidebarProps {
  selectedMethods: string[];
  onMethodsChange: (methods: string[]) => void;
}

function Sidebar({ selectedMethods, onMethodsChange }: SidebarProps) {
  return (
    <section className="flex flex-col gap-10 items-center overflow-x-hidden overflow-y-auto w-170 py-12 scroll-bar-custom bg-sidebar">
      <h1 className="text-2xl font-bold text-center">REKRYPT</h1>
      <MethodList
        selectedMethods={selectedMethods}
        onMethodsChange={onMethodsChange}
      ></MethodList>
    </section>
  );
}

export default Sidebar;
