const Heading1 = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: "2rem",
        marginTop: "4rem",
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
        {/* <div
          style={{
            background: "black",
            height: "2px",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Heading1;
