export const useHome = () => {
  const newList = ref([]);
  const isLoading = ref(false);
  
  const getNewsData = async ()=>{
    const url = `https://nuxr3.zeabur.app/api/v1/home/news/`;
    isLoading.value = true 

    try{
      const response = await fetch(url);
      if(response.ok){
        const { result } = await response.json();
        newList.value = result;
        isLoading.value = false;
        return
      }
    } catch(error){
      console.log(error.message)
    }
  }

  return {
    newList,
    isLoading,
    getNewsData

  };
};
