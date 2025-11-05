export const ThirdComponent = (props) => {
  return (
    <div className="flex flex-col gap-6 w-102 h-[370px] rounded-[14px] border border-[#0000001A] relative">
      <img
        className="w-full h-48 object-cover rounded-t-[14px]"
        src={props.img}
      />
      <div className="relative w-[406px] h-[152px]">
        <div className="text-[#FF6900] text-base font-sans absolute top-4 left-4">
          {props.price}
        </div>
        <p className="absolute top-13 left-4 font-sans text-base">
          {props.name}
        </p>
        <div className="absolute top-22 left-4 flex gap-1 items-center">
          <img className="h-4 w-4" src="/bed.png" />
          <p className="text-[#4A5565] text-[14px] font-sans">
            {props.bednum} Bedrooms
          </p>
        </div>
        <div className="absolute left-4 top-29 flex gap-1">
          <div className="flex gap-1 items-center">
            <img className="h-4 w-4" src="/shower.png" />
            <p className="text-[#4A5565] text-[14px] font-sans">
              {props.bathnum} Bathrooms
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="h-4 w-4" src="/sq.png" />
            <p className="text-[#4A5565] text-[14px] font-sans">
              {props.sq} sqft
            </p>
          </div>
        </div>
      </div>
      {props.tag ? (
        <div className="bg-[#FF6900] text-white h-[22px] rounded-lg flex items-center justify-center absolute left-3 top-3 text-[12px] p-2">
          {props.tagName}
        </div>
      ) : null}
    </div>
  );
};
