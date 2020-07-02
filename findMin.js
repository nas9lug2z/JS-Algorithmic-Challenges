function findMin(nums) {
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= min) {
        min = nums[i];
      }
    }
    return min;
}


findMin([77, -5, 2, 89, 44, 37]);
