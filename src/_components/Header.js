export const Header = (props) => {
  return (
    <div className="h-28 w-full flex flex-col gap-4 items-center">
      <div className="flex flex-col items-center">
        <h1 className={"font-sans font-medium " + props.title}>
          {props.head[0]}
        </h1>
        <h1 className={"font-sans font-medium " + props.title}>
          {props.head[1]}
        </h1>
      </div>
      <p className={"font-sans font-normal text-[#4A5565] " + props.tex}>
        {props.text}
      </p>
    </div>
  );
};
