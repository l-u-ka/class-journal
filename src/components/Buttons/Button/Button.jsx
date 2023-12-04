
function Button({children, type="button", onClick, style}) {
    const buttonStyle = style ?? {};
    return (
        <button style={buttonStyle} type={type} className='border-none rounded-[10px] px-[2.5rem] py-[0.8rem] bg-[#8a2be2] text-white cursor-pointer' onClick={onClick}>{children}</button>
    )
}

export default Button;