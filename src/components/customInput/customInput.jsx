function CustomInput({value, onChange, onBlur}) {
  return   <input
          type="text"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />;
}

export { CustomInput }; 