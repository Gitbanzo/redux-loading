import React, {PropTypes} from 'react';
import Modal from 'react-bootstrap/lib/Modal';

const Style = {
  modal: {
    position: 'fixed',
    zIndex: 1040,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
    opacity: 0.5
  },
  icon: {
    backgroundColor: '#3C3C3C',
    textAlign: 'center',
    color: 'white',
    border: '1px solid white',
    paddingTop: '8px',
    paddingBottom: '8px',
    position: 'absolute',
    top: '300px',
    width: '100%'
  },
  title: {
    display: 'inline'
  }
};

const Loading = ({loading}) => {
  return (
    <div>
      <Modal
        show={loading.isLoading}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
        backdrop="static"
        backdropStyle={Style.modal}>
        <div style={Style.icon}>
          <i className="fa fa-spinner fa-3x fa-spin"/>
          &nbsp;
          <h3 style={Style.title}>Now Loading...</h3>
        </div>
      </Modal>
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.object.isRequired
};

export default Loading;
