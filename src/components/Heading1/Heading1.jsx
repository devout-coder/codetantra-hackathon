const Heading1 = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: "1rem",
        marginTop: "2.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <p className="h1Text" style={{ margin: 0 }}>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading1;
