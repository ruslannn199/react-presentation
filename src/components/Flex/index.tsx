interface FlexProps extends React.PropsWithChildren {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  vertical?: boolean;
  style?: React.CSSProperties;
}

const Flex: React.FC<FlexProps> = ({ children, justify, align, vertical, style }) => {
  return <div style={{
    display: 'flex',
    justifyContent: justify || 'center',
    alignItems: align || 'center',
    flexDirection: vertical ? 'column' : 'row',
    ...style
  }}>{children}</div>;
}

export default Flex;
