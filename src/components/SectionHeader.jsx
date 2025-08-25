const SectionHeader = ({ title = "", subtitle = "", className = "" }) => {
  return (
    <div className={`SectionHeader ${className}`}>
      {title && (
        <>
          <h1 className="lgHeading">{title}</h1>
          <div className="breakLink"></div>
        </>
      )} 
      {subtitle && <p className="mainText">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
