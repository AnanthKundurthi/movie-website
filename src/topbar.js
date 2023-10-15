const Top = ({ searchV }) => {
  return (
    <div>
      <input
        type="text"
        style={{
          backgroundColor: "white",
          marginTop: "50px",
          width: "80%",
          textAlign: "center",
          marginLeft: "100px",
          marginBottom: "0px",
          height: "40px",
          borderRadius: "20px"
        }}
        placeholder="Enter Movie name..."
        onChange={(e) => searchV(e.target.value)}
      />
    </div>
  );
};

export default Top;
