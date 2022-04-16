import IMeaning from './IMeaning';
import ISentence from './ISentence';

interface IWordInfo {
  word: string;
  url?: string;
  meanings: IMeaning[];
  sentences: ISentence[];
  syllables: string[];
  synonyms: string[];
}

export default IWordInfo;
