export function countVowels(text: string): number {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }
    return count;
}
