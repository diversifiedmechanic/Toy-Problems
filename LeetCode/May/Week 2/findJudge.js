/*
In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

    The town judge trusts nobody.
    Everybody (except for the town judge) trusts the town judge.
    There is exactly one person that satisfies properties 1 and 2.

You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.



Example 1:

Input: N = 2, trust = [[1,2]]
Output: 2

Example 2:

Input: N = 3, trust = [[1,3],[2,3]]
Output: 3

Example 3:

Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1

Example 4:

Input: N = 3, trust = [[1,2],[2,3]]
Output: -1

Example 5:

Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3



Note:

    1 <= N <= 1000
    trust.length <= 10000
    trust[i] are all different
    trust[i][0] != trust[i][1]
    1 <= trust[i][0], trust[i][1] <= N
*/

/*
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */

var findJudge = function(N, trust) {
  if (!trust.length && N === 1) return 1;

  // object to track the votes
  let votes = {};
  // array to track who has voted
  let hasVoted= [];

  // iterate through the trust array
  for (let i = 0; i < trust.length; i++) {
    // add the voter to the cannot be judge array
    hasVoted[trust[i][0]] = true;
    // add to the vote counter
    if (votes[trust[i][1]] === undefined) {
      votes[trust[i][1]] = 1;
    } else {
      votes[trust[i][1]] += 1;
    }
  }

  // go through the object
  for (let [person, vote] of Object.entries(votes)) {
    // if the current vote count is n -1 and the person did not vote
    if (vote === N -1 && !hasVoted[person]) {
      // return the person
      return person;
    }
  }

  return -1;
};