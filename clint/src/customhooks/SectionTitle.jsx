const SectionTitle = ({ title }) => {
  return (
    <div className="my-24 text-center">
      <hr className="border-t-4 border-black mb-5 border-dotted w-1/2 mx-auto" />
      <p className="text-5xl font-agbalumo font-semibold">{title}</p>
      <hr className="border-t-4 border-black mt-5 border-dotted w-1/2 mx-auto" />
    </div>
  );
};

export default SectionTitle;
