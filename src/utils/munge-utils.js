function mungeAllBooks(apiData) {
    const {
      title,
      author_name,
      place,
      time,
      key,
    } = apiData;
  
    const mungedData = {
      title: title,
      author: author_name,
      setting: place,
      time_period: time,
      key: key,
    };
    
    return mungedData;
  }
  
  module.exports = { mungeAllBooks }