import { toast } from 'react-toastify';

const useToast = () => {
  const successToast = (message) => {
    toast.success(message, {
      toastId: message,
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const errorToast = (message) => {
    toast.error(message || 'Erro desconhecido', {
      toastId: message,
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return {
    successToast,
    errorToast,
  };
};

export default useToast;
