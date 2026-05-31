const Button = ({name,bgColor,textColor,border}) => {
    return (
        <button className={`w-52.5 h-12.25 ${bgColor ? `bg-[linear-gradient(to_right,${bgColor.bg1},${bgColor.bg2})]` : ''} ${border ? `border border-[${border}]` : ''} rounded-[10px] font-normal text-[${textColor}] text-archivo  text-[12px] uppercase`}>
              {name}
            </button>
    );
}

export default Button;