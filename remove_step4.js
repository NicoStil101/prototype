const fs = require('fs');

const content = fs.readFileSync('app.js', 'utf8');

// The file has a structure:
//             steps: [
//                 { title: "...", desc: "..." },
//                 { title: "...", desc: "..." },
//                 ...
//             ]
// There are multiple such blocks, one for each language.
// In each block, we want to remove the 4th item (index 3), and renumber the titles of the subsequent items.
// Step 5 -> 4, Step 6 -> 5, Step 7 -> 6.

let newContent = content.replace(/steps:\s*\[([\s\S]*?)\]/g, (match, stepsBlock) => {
    let lines = stepsBlock.split('\n');
    let stepLines = [];
    let otherLines = [];
    
    // We only want to process lines that look like `{ title: "...", desc: "..." }`
    let steps = [];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.includes('{') && line.includes('title:')) {
            steps.push({ line, index: i });
        }
    }
    
    if (steps.length >= 4) {
        // Remove 4th step (index 3)
        let step4Index = steps[3].index;
        
        // Renumber remaining steps
        for (let j = 4; j < steps.length; j++) {
            let line = steps[j].line;
            // The title usually has the number in it, like "Schritt 5", "Step 5", etc.
            // We can replace the number with j.
            line = line.replace(/(\D)(\d+)(\D)/, (m, p1, p2, p3) => {
                if (parseInt(p2) === j + 1) {
                    return p1 + j + p3;
                }
                return m;
            });
            steps[j].line = line;
            lines[steps[j].index] = line;
        }
        
        // Remove step 4 from the lines
        lines.splice(step4Index, 1);
        
        // Also handle potential commas: if we removed the last item (not the case here since we have 7 steps)
    }
    
    return 'steps: [' + lines.join('\n') + ']';
});

fs.writeFileSync('app.js', newContent);
console.log("Updated app.js");
