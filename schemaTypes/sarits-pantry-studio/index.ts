import { postType } from './postType';
import { productType } from './productType';
import { spiceJournalType } from './spiceJournalType'; 
import { globalContentType } from './globalContentType';
import { homePageContentType } from './homePageContentType';
import { aboutPageType } from './aboutPageType';
import { commentSchema } from './commentType';
import { articleType } from './journal/article';

export const pantryschemaTypes = [productType, spiceJournalType, globalContentType, homePageContentType, aboutPageType, articleType, commentSchema];