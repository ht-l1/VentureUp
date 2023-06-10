// const { v4:uuid } = require('uuid');
const { v4: uuid } = require('uuid');

module.exports = [
{
    _id: uuid(),
    image: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNDkxMzg0NzUvNzM3Yzg3MWQ4NTViY2M2YzQxNzIwODczYmI1NWQ5NmIuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==',
    name: "Mount Roberts",
    location: "Moultonborough, NH",
    hikedAt: "Mar 2023",
    rating: "5",
    details: {
      text: "details",
      link: "https://www.alltrails.com/trail/us/new-hampshire/mount-roberts-trail"
    }
  },
  {
    _id: uuid(),
    image: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzczOTg0OTgvNjg1MzA4NDE3NjEyYjE3YzBkOTM5YTQ1YjZiYjEwMTAuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==',
    name: "Mount Willard",
    location: "Bretton Woods, NH",
    hikedAt: "Feb 2023",
    rating: "5",
    details: {
      text: "details",
      link: "https://www.alltrails.com/trail/us/new-hampshire/mount-willard"
    }
  },
  {
    _id: uuid(),
    image: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzkxNzU0ODAvNWE1OTBjMjM5NDQzNzRjZTE3YzU4MDdlNjk5MDRlYzYuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==',
    name: "Mount Pemi",
    location: "Lincoln, NH",
    hikedAt: "Jan 2023",
    rating: "5",
    details: {
      text: "details",
      link: "https://www.alltrails.com/trail/us/new-hampshire/mount-pemigewasset-trail-indian-head"
    }
  },
  {
    _id: uuid(),
    image: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjA0NDY0NjgvMTBhZTAzM2NlNjhjMWNjMWM2ZDZkZWYyZWVhOGE2MWIuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==',
    name: "Mount Major",
    location: "Alton Bay, NH",
    hikedAt: "Feb 2023",
    rating: "5",
    details: {
      text: "details",
      link: "https://www.alltrails.com/trail/us/new-hampshire/mount-major-and-brook-trail-loop"
    }
  },
  {
    _id: uuid(),
    image: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjAzMzAxOTAvYWEwMDUyNjAwNzUwY2IxZjgyMWE5NGFkNGRjZWM5NDcuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==',
    name: "Mount Wachusett",
    location: "Princeton, MA",
    hikedAt: "March 2023",
    rating: "5",
    details: {
      text: "details",
      link: "https://www.alltrails.com/trail/us/massachusetts/wachusett-summit-loop"
    }
  },
  {
    _id: uuid(),
    image: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjAzMDQ2NjQvNWQ2ZTA2OWEzMjMyZDkzNmJmY2VkOWRhMDIxNTNlODguanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==',
    name: "Mount Watatic",
    location: "Ashburnham, MA",
    hikedAt: "Jan 2023",
    rating: "5",
    details: {
      text: "details",
      link: "https://www.alltrails.com/trail/us/massachusetts/mount-watatic"
    }
  },
  {
    _id: uuid(),
    image: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjI1NDQ0MDAvN2EyODRjYTc1ZjYxYzgxMjkyNDA5ZDFmODY0MjIwZTguanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==',
    name: "Great Brook Farm State Park",
    location: "Carlisle, MA",
    hikedAt: "May 2023",
    rating: "5",
    details: {
      text: "details",
      link: "https://www.alltrails.com/trail/us/massachusetts/great-brook-farm-woodchuck-chicken-and-beaver-loop-trail"
    }
  },
  {
    _id: uuid(),
    image: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNTk5Njc4NjcvNTkyMTAwZTNiMTZlYTdkZDNhM2ZhY2E5N2MyYmRlOTIuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==',
    name: "Borderland Sate Park",
    location: "Easton, MA",
    hikedAt: "May 2023",
    rating: "5",
    details: {
      text: "details",
      link: "https://www.alltrails.com/trail/us/massachusetts/borderland-state-park-loop-trail"
    }
  }
];
