
const schema = {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  field : [
    {
    name: 'title',
    title: 'Title',
    type : 'string',
    require,
    validatoin : (Rule:any) => Rule.required()
  
  },
  {
    name: 'slug',
    title : 'Slug',
    type: 'slug',
    options : {source : 'title'}
  },
  {
    name: 'downlaod',
    title : 'Download Link',
    type: 'url',
    validation : (Rule:any) => Rule.required()
  },
  {
    name: 'views',
    title : 'Views',
    type: 'number',
    validation : (Rule:any) => Rule.required(),
    initialValue : 0
  }, 
  {
    name: 'poster',
    title : 'Poster',
    type: 'image',
    validation : (Rule:any) => Rule.required(),
    options : {
      hotspot : true,
    }
  },
  {
    name: 'category',
    title : 'Category',
    type: 'string',
    validatoin : (Rule:any) => Rule.required(),
    options : {
      list : ['frontend', 'backend' , 'next 13' , 'full stack' , 'others']
    }
  }

  ]
}

export default schema;