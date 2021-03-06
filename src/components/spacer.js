import React from 'react';

const EmptySpace = (props) => {
  const style = {
    lineHeight: `${props.height}px`,
    fontSize: '1px',
    msoLineHeightRule: 'exactly'
  };

  return (
    <table width="100%">
      <tbody>
        <tr>
          <td
            width="100%"
            height={`${props.height}px`}
            style={style}
            dangerouslySetInnerHTML={{__html: '&nbsp;'}} />
        </tr>
      </tbody>
    </table>
  );
};

EmptySpace.defaultProps = {
  height: '30'
};

export default EmptySpace;
