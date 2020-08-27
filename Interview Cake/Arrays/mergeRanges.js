/*
Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

For example:

  { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

For example, given:

[
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

your function would return:

  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.
*/

// O(n^2 log n)
// function mergeRanges(meetings) {
//   // array of merged meeting
//   let merged = [];

//   // iterate through the meetings
//   meetings.forEach((meeting) => {
//     let notMerged = true;
//     let idx = 0;

//     // compare them to the meetings already merged
//     while (notMerged && idx < merged.length) {
//       // if the start or end falls within the merged s / e,
//       if ((meeting.startTime >= merged[idx].startTime && meeting.startTime <= merged[idx].endTime)
//         || (meeting.endTime >= merged[idx].startTime && meeting.endTime <= merged[idx].endTime)) {
//           // take the smallest of the starts
//           merged[idx].startTime = Math.min(merged[idx].startTime, meeting.startTime);
//           // take the largest of the ends
//           merged[idx].endTime = Math.max(merged[idx].endTime, meeting.endTime);

//           notMerged = false;
//         }

//       idx++;
//     }

//     // if never merged, add new range to merged meetings list
//     if (notMerged) merged.push(meeting);
//   });

//   merged.sort((a, b) => a.startTime - b.startTime);

//   return merged;
// }


// O(n log n)
function mergeRanges(meetings) {
  // this over-all helps reduce complexity and the result needs to be sorted by start time
  meetings.sort((a, b) => a.startTime - b.startTime);

  // instantiate merged arr with earliest start time meeting
  let merged = [meetings[0]];

  for (let i = 1; i < meetings.length; i++) {
    let currentMeeting = meetings[i];
    let lastMerged = merged[merged.length - 1];

    if (currentMeeting.startTime <= lastMerged.endTime) {
      lastMerged.endTime = Math.max(currentMeeting.endTime, lastMerged.endTime);
    } else {
      merged.push(currentMeeting);
    }
  }

  return merged;
}


console.log(mergeRanges([
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]));