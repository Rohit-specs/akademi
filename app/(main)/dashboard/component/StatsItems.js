const StatsItems = ({ icon: Icon, value, title, bgColor }) => {
  return (
    <>
      <span
        className={`${bgColor} stats-icon text-white position-relative rounded-circle me-2`}
      >
        <Icon className="position-absolute top-50 start-50 translate-middle fs-3" />
      </span>
      <div className="d-flex flex-column my-auto justify-content-center">
        <small className="text-gray-400">{title}</small>
        <p className="fw-bold logo">{value}</p>
      </div>
    </>
  );
};

export default StatsItems;
