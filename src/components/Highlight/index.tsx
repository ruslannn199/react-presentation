const Highlight: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: "grey",
      borderRadius: "10px",
      border: "darkgrey 5px solid",
      margin: "5px 0",
    }}>{children}</div>
  )
}

export default Highlight;
