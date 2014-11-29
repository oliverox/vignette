/**
 * VignetteController
 *
 * @description :: Server-side logic for managing vignettes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    getOne: function(req, res) {
        // return res.badRequest('Error encountered with JSON');
        return res.json({
            id: 1,
            title: "10 Reasons Why You Must Visit Australia Before You Die",
            titlePosition: 0,
            displayAuthor: true,
            createdBy: {
                fbId : '',
                firstName: 'Oliver',
                lastName: 'Oxenham',
                email: 'oliver.oxenham@gmail.com'
            },
            items: [{
                index: 0,
                type: 1,
                photoId: '',
                url: '/images/sample/1.jpg',
                width: 1920,
                height: 1080,
                text: "Belgian Johan Lolos has been traveling around Australia for a year. If his pictures don’t make you want to jump on a plane right now, you must be CRAZY! Johan: \"This is The Pinnacles in Western Australia. The sunset was breathtaking. I was a full moon night. This day I discovered that on the night of the full moon it rises at exactly the same time as the sun sets. The sunset and moon rising: so exciting!\"",
                backgroundColor: ''
            }, {
                index: 1,
                type: 1,
                photoId: '',
                url: '/images/sample/2.jpg',
                width: 1920,
                height: 1080,
                text: "When Lolos arrived in Australia, he had 500 followers on Instagram. He leaves next week with more than 26,000, following him for fabulous images like this. Johan: \"On the way to Cahill’s Lookout, I met a girl living in Katoomba who knew a secret spot. It was stunning. The Blue Mountains is perfect for meditation: great nature, amazing lookouts and rolling valleys.\"",
                backgroundColor: ''
            }, {
                index: 2,
                type: 1,
                photoId: '',
                url: '/images/sample/3.jpg',
                width: 1920,
                height: 1440,
                text: "Devils Marbles, NT. Johan: \"Heading up to Darwin after my first visit to Uluru, the sun came out after a rainy week, and it was stunning. I went for a different perspective, waiting for the sun to drop below the clouds: capturing a beautiful sunset.\"",
                backgroundColor: ''
            }, {
                index: 3,
                type: 1,
                photoId: '',
                url: '/images/sample/4.jpg',
                width: 1424,
                height: 2136,
                text: "Darwin, Northern Territory. Johan: \"I lived in Darwin for three months and it was heavenly. I arrived at the end of the rainy season in early April, and it was still so hot I had to to hit the pool every day just to cool down. Darwin was incredible, every day served up the most beautiful, breathtaking sunsets.\"",
                backgroundColor: ''
            }, {
                index: 4,
                type: 1,
                photoId: '',
                url: '/images/sample/5.jpg',
                width: 1600,
                height: 1200,
                text: "Devils Marbles, NT. \"Heading up to Darwin after my first visit to Uluru, the sun came out after a rainy week, and it was stunning. I went for a different perspective, waiting for the sun to drop below the clouds: capturing a beautiful sunset.\"",
                backgroundColor: ''
            }, {
                index: 5,
                type: 1,
                photoId: '',
                url: '/images/sample/6.jpg',
                width: 1920,
                height: 1080,
                text: "Darwin, Northern Territory. \"I lived in Darwin for three months and it was heavenly. I arrived at the end of the rainy season in early April, and it was still so hot I had to to hit the pool every day just to cool down. Darwin was incredible, every day served up the most beautiful, breathtaking sunsets.\"",
                backgroundColor: ''
            }, {
                index: 6,
                type: 1,
                photoId: '',
                url: '/images/sample/7.jpg',
                width: 2000,
                height: 1314,
                text: "Bay of Fires, Tasmania. \"I arrived in Tassie with a friend on Christmas Day 2013, and we hitchhiked around for three weeks. This was the first time I saw white sand. We camped on this beach. Tasmania is probably my favourite state, it’s so pure, clean and genuine.\"",
                backgroundColor: ''
            }, {
                index: 7,
                type: 1,
                photoId: '',
                url: '/images/sample/8.jpg',
                width: 1772,
                height: 1181,
                text: "Whitehaven Beach, Queensland. \"Believe the hype, this is the most beautiful beach in the world. I shot this image from Hill Inlet lookout, it’s a panorama made up of 35 images. I was on a Queensland road-trip with three German friends. Because I was working for voyagerloin.com webzine I got some amazing free tours, including this three day three-day cruise on Solway Lass around the Whitsundays. Whitehaven is simply the best beach I have ever seen, the sand is so fine. There’s really no way to describe this beach – you have to experience it for yourself.\"",
                backgroundColor: ''
            }, {
                index: 8,
                type: 1,
                photoId: '',
                url: '/images/sample/9.jpg',
                width: 1920,
                height: 1080,
                text: "Whitehaven Beach, same lookout. \"This is zoomed in on the sand spit were we stopped for a swim. The water is a perfect colour: just crazy!?\"",
                backgroundColor: ''
            }, {
                index: 9,
                type: 1,
                photoId: '',
                url: '/images/sample/10.jpg',
                width: 1600,
                height: 1200,
                text: "Heart Reef, Great Barrier Reef, Queensland. \"This was shot from a seaplane. I’d been lucky enough to take a trip over the GBR off Cairns by helicopter, and it is the most beautiful thing I have seen in my life. This was the same feeling . We landed on the sea and got out of the plane and snorkeled in pristine waters, no human had swum in before. Truly unforgettable.\"",
                backgroundColor: ''
            }]
        });
    }
};
