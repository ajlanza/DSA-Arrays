2) Length of the array is 6, capacity is 12, and memory addresss is 3. The length of the array is 6 because we have pushed 6 items to it. The capacity is at 12 because the array was resized when we pushed the fourth item. When the array resizes it takes the length and multiplies it by the size ratio which is three in this case. The memory address is 3 because when the array resized it discarded the old block of memory which had a capacity of 3 at memory address 0-2 and created a new block of memory with a capacity of 12 from memory address 3-14.   

3) Length is 3 because we have removed 3 items from the array. Capacity is 12 because we don't resize the array down and it was previously resized up. The address is at 3 because this is the beggining of the array after it was resized once.   

4) The result is NaN. Memory is set up as "Float64Array" which is an array of 64 bit floating point numbers and therefore can not hold strings.
