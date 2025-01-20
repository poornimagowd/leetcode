def mergeAlternately(word1: str, word2: str) -> str:
    i, j = 0, 0
    result = []
    
    # Iterate while there are characters left in either string
    while i < len(word1) or j < len(word2):
        # Add character from word1 if it's not fully traversed
        if i < len(word1):
            result.append(word1[i])
            i += 1
        # Add character from word2 if it's not fully traversed
        if j < len(word2):
            result.append(word2[j])
            j += 1
    
    # Join the characters to form the final merged string
    return ''.join(result)