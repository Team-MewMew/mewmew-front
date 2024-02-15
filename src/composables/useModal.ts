import { ref } from 'vue';

type useModalArgs = {
  callback: () => void;
};

export function useModal({ callback }: useModalArgs) {
  const isShowing = ref(false);

  const toggleModal = () => {
    isShowing.value = !isShowing.value;
  };

  const invokeModal = () => {
    callback();
  };

  return { isShowing, toggleModal, invokeModal };
}
