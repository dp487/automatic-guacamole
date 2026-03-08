const conversionMap = {
    'A': '卂', 'B': '乃', 'C': '匚', 'D': '刀', 'E': '乇',
    'F': '下', 'G': '厶', 'H': '卄', 'I': '丨', 'J': 'ﾌ',
    'K': 'Ҝ', 'L': 'ㄥ', 'M': '爪', 'N': '几', 'O': 'ㄖ',
    'P': '卩', 'Q': 'Ɋ', 'R': '尺', 'S': '丂', 'T': 'ㄒ',
    'U': '凵', 'V': 'リ', 'W': '山', 'X': '乂', 'Y': 'ㄚ',
    'Z': '乙',
    'a': '卂', 'b': '乃', 'c': '匚', 'd': '刀', 'e': '乇',
    'f': '下', 'g': '厶', 'h': '卄', 'i': '丨', 'j': 'ﾌ',
    'k': 'Ҝ', 'l': 'ㄥ', 'm': '爪', 'n': '几', 'o': 'ㄖ',
    'p': '卩', 'q': 'Ɋ', 'r': '尺', 's': '丂', 't': 'ㄒ',
    'u': '凵', 'v': 'リ', 'w': '山', 'x': '乂', 'y': 'ㄚ',
    'z': '乙'
};

document.getElementById('inputText').addEventListener('input', function() {
    const inputText = this.value;
    let outputText = '';

    for (let char of inputText) {
        outputText += conversionMap[char] || char;
    }

    document.getElementById('outputText').textContent = outputText;
});
