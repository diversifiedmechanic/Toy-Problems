/*
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

Example 1:
Input: 2, [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished
             course 0. So the correct course order is [0,1] .

Example 2:
Input: 4, [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both
             courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
             So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .
*/

/*
* @param {number} numCourses
* @param {number[][]} prerequisites
* @return {number[]}
*/

var findOrder = function(numCourses, prerequisites) {
  if (numCourses >= 1 && prerequisites.length === 0) prerequisites = [[numCourses - 1, numCourses - 2]];

  let highestCourse = prerequisites[0][0];
  let store = {};

  prerequisites.forEach(([course, prereq]) => {
    if (course > highestCourse) highestCourse = course;

    if (store[course] === undefined) {
      store[course] = new Set();
      store[course].add(prereq);
    } else {
      store[course].add(prereq);
    }
  });

  let schedule = [highestCourse];

  let pre = [];

  store[highestCourse].forEach((val) => pre.push(val));

  while (pre.length) {
    let temp = new Set();

    for (let i = 0; i < pre.length; i++) {
      if (pre[i] >= 0) {

        if (schedule.indexOf(pre[i]) !== -1) return [];

        schedule.unshift(pre[i]);
        if (store[pre[i]] !== undefined) {
          store[pre[i]].forEach((val) => temp.add(val));
        }
      }
    };
    pre = Array.from(temp);
  }


  if (schedule.length < numCourses) {
    for (let i = 0; i < numCourses; i++) {
      if (schedule.indexOf(i) === -1) schedule.push(i);
    }
  }

  return schedule >= numCourses ? [] : schedule;
};

////////////////// TESTS ///////////////

// should correctly identify schedule with two classes
console.log(JSON.stringify(findOrder(2, [[1,0]])) === JSON.stringify([0,1]));

// should work with four classes and multiple prereqs for one class
console.log(JSON.stringify(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])) === JSON.stringify([0,2,1,3]));

console.log(JSON.stringify(findOrder(2, [])) === JSON.stringify([0,1]));

console.log(JSON.stringify(findOrder(2, [[0,1],[1,0]])) === JSON.stringify([]));

// === JSON.stringify([])