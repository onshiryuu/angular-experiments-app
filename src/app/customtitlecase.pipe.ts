import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customtitlecase'
})
// export class CustomTitleCase implements PipeTransform {
//     firstletter: string;
//     otherletters: string;
//     transform(value: any) {
//         if (!value) { return null; }
//         this.firstletter = value.substr(0, 1);
//         this.otherletters = value.substr(1, value.length - 1);
//         this.otherletters = this.otherletters.replace(/Of/g, 'of');
//         this.otherletters = this.otherletters.replace(/The/g, 'the');

//         value = this.firstletter + this.otherletters;
//         return value;
//     };
// }
export class CustomTitleCase implements PipeTransform {
    transform(value: string) {
        if (!value) { return null; }
        const words = value.split(' ');
        for (let i = 0 ; i < words.length ; i++) {
            if (i > 0 && this.isPreposition(words[i])) {
                words[i] = words[i].toLowerCase();
            } else {
                words[i] = this.toTitleCase(words[i]);
            }
        }
        value = words.join(' ');

        return value;
    }

    private toTitleCase(value: string): string {
        return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
    }

    private isPreposition(value: string): boolean {
        const prepositions = [
            'the',
            'of',
            'das',
            'die',
            'der'
        ];
        return prepositions.includes(value.toLowerCase());
    }
}
