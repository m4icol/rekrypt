import MethodList from "../api/MethodsList";

interface SidebarProps {
  selectedMethods: string[];
  onMethodsChange: (methods: string[]) => void;
}

function Sidebar({ selectedMethods, onMethodsChange }: SidebarProps) {
  return (
    <section className="py-10 px-10 flex flex-col justify-between bg-sidebar w-[500px]">
      <div className="flex flex-col gap-9">
        <h1 className="text-2xl font-bold text-center">REKRYPT</h1>
        <MethodList
          selectedMethods={selectedMethods}
          onMethodsChange={onMethodsChange}
        ></MethodList>
      </div>
      <li className="bg-main py-4 px-7  text-sm w-full rounded-xl method-shadow flex flex-row gap-3">
        <p className=" font-semibold">+</p>
        ADD KRIPT
      </li>
    </section>
  );
}

export default Sidebar;
