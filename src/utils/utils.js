export const LIST_URL = 'https://exposure.api.redbee.live:443/v1/customer/Eyevinn/businessunit/STSWE/recommend/user';

export const VIDEO_FETCH_URL = (slug) => `https://exposure.api.redbee.live:443/v2/customer/Eyevinn/businessunit/STSWE/entitlement/${slug}/play?audioOnly=false&&&&&&&&&&&&&&&&&&&&&&&&&&&`;

export const VIDEO_SEARCH_URL = (slug) => `https://exposure.api.redbee.live:443/v1/customer/Eyevinn/businessunit/STSWE/content/search/query/${slug}?types=MOVIE%2CTV_SHOW&&&pageSize=50&pageNumber=1&&&&onlyPublished=true&&`;
