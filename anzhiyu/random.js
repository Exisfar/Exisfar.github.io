var posts=["2025/03/29/Hello-World/","2025/04/18/Life-2025-04-18-健身/","2025/04/18/Life-2025-04-18-衣物分类/","2025/04/15/Development-2025-04-15-软件开发中的项目组织方式/","2025/04/18/ML-2025-04-18-normalization/","2025/04/18/ML-2025-04-18-regularization/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };