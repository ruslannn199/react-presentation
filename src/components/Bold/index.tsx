const Bold: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <b
      style={{
        fontWeight: 700,
        color: '#42affa',
      }}
    >
      {children}
    </b>
  );
}

export default Bold;
