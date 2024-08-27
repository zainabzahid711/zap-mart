const BottomFooter = () => {
  return (
    <>
      <div className="bg-navblue w-full p-8 flex justify-between">
        <div className="pl-10">
          <h6>
            All Rights Reserved &copy; {new Date().getFullYear()} MarketPlace
          </h6>
        </div>
        <div className="pr-28"> info@example.com</div>
      </div>
    </>
  );
};

export default BottomFooter;
