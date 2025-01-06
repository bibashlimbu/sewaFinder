import GoBackButton from "./GoBackButton";

function ServicesHeader({ children, showBackButton = true }) {
  return (
    <div className="flex gap-4 items-center mb-3">
      {showBackButton && <GoBackButton />}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{children}</h1>
    </div>
  );
}

export default ServicesHeader;
