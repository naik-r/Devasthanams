import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [selectedSection, setSelectedSection] = useState('');
  const [blinkClass, setBlinkClass] = useState('');

  const toggleBlink = () => {
    setBlinkClass('blink'); // Apply blink class
    setTimeout(() => setBlinkClass(''), 1000); // Remove blink class after 1000ms (1 second)
  };
  return (
    <div className="about-page">
      <h1>About the Temple</h1>
      <p>
        Welcome to the Divine Abode of Lord Ganesha and Lord Hanuman at 
        Sri Lakshmi Ganapathi Hanumatheesawara Temple. Our temple is a place of serenity, 
        spirituality, and rich cultural heritage. Explore the history, mythology, and topography of our sacred space.
      </p>
      <strong className={`click-text ${blinkClass}`}>Click The below Items</strong>
      <div className="sections">
        <ul>
          <li onClick={() => { setSelectedSection('history'); toggleBlink(); }}>
            <img src={`${process.env.PUBLIC_URL}/image/his.png`} alt="History Icon" className="list-icon" />
            History
          </li>
          <li onClick={() => { setSelectedSection('mythology'); toggleBlink(); }}>
            <img src={`${process.env.PUBLIC_URL}/image/myth.jpg`} alt="History Icon" className="list-icon" />
            Mythology
          </li>
          <li onClick={() => { setSelectedSection('topography'); toggleBlink(); }}>
            <img src={`${process.env.PUBLIC_URL}/image/topo.jpg`} alt="History Icon" className="list-icon" />
            Topography
          </li>
        </ul>
        
        
        {selectedSection === 'history' && (
          <div className="section-content">
            <img src={`${process.env.PUBLIC_URL}/image/d2.jpg`} alt="Temple History" />
            <div>
              <h2><i>History of the Temple</i></h2>
              <p>The temple was established in the early 19th century.
               Over the centuries, it has become a focal point of devotion and 
               cultural activities. The temple's architecture is a blend of ancient and medieval styles,
                reflecting the rich heritage of the region. Welcome to our Devasthanam,
                 a sacred place where devotees gather to worship and seek blessings from the divine. 
                 Our Devasthanam holds a rich history and cultural significance, serving as a center for spiritual practices, rituals, and 
                 community gatherings. For rituals and prayers, this chamber frequently has an open space that can be moved in a clockwise direction.
                 Dating back several centuries, the temple's origins trace back to a time when devout worshippers sought to establish a sacred space dedicated to Lord Ganesha, the remover of obstacles, and Lord Hanuman, the epitome of devotion and strength. Legends speak of how the temple was founded by a revered saint who experienced divine visions guiding him to this auspicious location. Over the years, the temple has undergone numerous renovations and expansions, each phase reflecting the changing architectural styles and the evolving religious practices of the devotees. Today, the temple stands as a beacon of spiritual enlightenment, attracting pilgrims and seekers from far and wide who come to seek blessings, solace, and inspiration from the divine presence of 
                 Lord Ganesha and Lord Hanuman.Throughout its history, Sri Lakshmi Ganapathi Hanumatheeswara Temple has served as a hub for religious ceremonies, festivals, and community gatherings. It continues to play a pivotal role in the lives of devotees who visit to seek blessings, solace, and spiritual enlightenment. The temple's serene ambiance and panoramic views offer a tranquil retreat for worshippers and seekers alike, fostering a deep connection to the divine presence of Lord Ganesha and Lord Hanuman.
                 The temple's architecture reflects a blend of ancient and medieval styles, evolving over time with numerous renovations and expansions. Originally constructed with traditional materials and methods, the temple has stood as a testament to spiritual resilience and cultural continuity. Its sanctum sanctorum is adorned with intricate carvings and sacred symbols, creating an atmosphere conducive to prayer, meditation, and spiritual reflection.
                 Sri Lakshmi Ganapathi Hanumatheeswara Temple holds a rich and storied history that dates back several centuries. Situated in a serene setting, this sacred abode is steeped in spiritual significance and cultural heritage. Legends speak of its founding by a revered saint who was guided by divine visions to establish a place dedicated to Lord Ganesha and Lord Hanuman, embodying the essence of devotion, strength, and wisdom.
                 </p>
                 <p>Throughout its history, Sri Lakshmi Ganapathi Hanumatheeswara Temple has served as a hub for religious ceremonies, festivals, and community gatherings. It continues to play a pivotal role in the lives of devotees who visit to seek blessings, solace, and spiritual enlightenment. The temple's serene ambiance and panoramic views offer a tranquil retreat for worshippers and seekers alike, fostering a deep connection to the divine presence of Lord Ganesha and Lord Hanuman.

                 The temple follows traditional Hindu rituals and practices, offering devotees a space for prayer, meditation, and spiritual reflection. Daily rituals, including morning and evening aratis (ritualistic worship with lamps), abhishekas (ritual bathing of deities), and homas (fire rituals), are conducted to invoke the blessings of the deities and foster a sense of spiritual communion among devotees.
                 Beyond its religious significance, Sri Lakshmi Ganapathi Hanumatheeswara Temple plays an integral role in the local community. It serves as a center for cultural activities, educational programs, and charitable initiatives aimed at promoting social welfare and community development. The temple actively engages in initiatives that support education, healthcare, and environmental conservation, reflecting its commitment to holistic well-being and community service.
                 </p>
                 <p>Today, Sri Lakshmi Ganapathi Hanumatheeswara Temple stands as not just a place of worship, but a living testament to the enduring faith and cultural heritage of its devotees. It remains a beacon of spirituality, welcoming pilgrims and visitors from around the world to experience its timeless grace and divine energy. The temple continues to uphold its legacy of spiritual enlightenment, cultural preservation, and community service, embodying the values of devotion, compassion, and unity.

In summary, Sri Lakshmi Ganapathi Hanumatheeswara Temple's history is intertwined with spiritual devotion, architectural craftsmanship, and community stewardship, making it a revered pilgrimage site and cultural landmark cherished by devotees and visitors alike.
In essence, Sri Lakshmi Ganapathi Hanumatheeswara Temple's topography is characterized by its scenic beauty, architectural grandeur, and cultural significance. It embodies the principles of sacred geography in Hindu tradition, offering devotees a place to seek solace, spiritual renewal, and divine grace amidst the tranquil embrace of nature and sacred architecture.
</p>
            </div>
          </div>
        )}

        {selectedSection === 'mythology' && (
          <div className="section-content">
            <img  src={`${process.env.PUBLIC_URL}/image/d16.jpg`} alt="Ganesha Mythology" />
            <div>
              <h2><i>Mythology of Lord Ganesha and Lord Hanuman</i></h2>
              <h3>Ganesha</h3>
              <p>Ganesha, the elephant-headed god, is revered as the remover of obstacles and the god of beginnings. 
              According to Hindu mythology, he was created by Goddess Parvati from the sandalwood paste she used for her bath.
               Lord Shiva, her consort, beheaded Ganesha, mistaking him for an intruder.
                Upon realizing his mistake, Shiva resurrected Ganesha with the head of a mighty elephant,
                 granting him wisdom and power. Lord Ganesha is known as the remover of obstacles and the lord of beginnings.
                  His presence in the temple helps devotees overcome hurdles and challenges in their lives. Ganesha is also associated with wisdom, knowledge, and learning. His presence in the temple inspires devotees to seek wisdom and understanding in their endeavors.
                  Lord Ganesha, the beloved elephant-headed deity in Hinduism, is revered as the remover of obstacles and the god of beginnings. According to ancient Hindu mythology, he was created by Goddess Parvati from the sandalwood paste she used for her bath. When Lord Shiva, her consort, mistakenly beheaded Ganesha upon his return and realization of the situation he was in. intervened and attached the head of an elephant to Ganesha's body, granting him new life and making him one of the most important gods. elephant-headed god, known for his wisdom and intellect, is obstacles.
                  </p>
                  <p>In temples and homes, Ganesha is often depicted with four arms, each carrying symbolic objects such as a noose, goad, modak (sweet), and a broken tusk. His large ears symbolize the importance of listening and gaining knowledge, while his small eyes remind us to concentrate and focus. Ganesha's worship is prominent throughout India and among Hindu communities worldwide, especially during the festival of Ganesh Chaturthi, where elaborate rituals and celebrations are held to honor his divine presence.
                  Ganesha is worshipped at the beginning of rituals and ceremonies to ensure their success and smooth progression. He is also known as the patron of arts and sciences and the deva of intellect and wisdom. His blessings are sought for new ventures, educational pursuits, and overcoming life's challenges. Ganesha's vahana (vehicle) is a mouse or rat, symbolizing his ability to move through obstacles swiftly and with grace.Ganesha's popularity extends beyond Hinduism, embraced by Buddhists and Jains as well, symbolizing common values of wisdom, intellect, and the ability to overcome obstacles on the path to spiritual growth and success.
                  </p>
              
              <h3>Hanuman</h3>
              <p>Hanuman, the monkey god, is known for his unwavering devotion to Lord Rama and his incredible strength. Born to Anjana and Kesari, Hanuman is considered an incarnation of Lord Shiva. His tales of bravery, such as his leap to Lanka in search of Sita and lifting the Sanjeevani mountain to save Lakshmana, are legendary in Hindu mythology. Lord Hanuman is revered for his protective powers and the ability to ward off evil forces. His presence offers a sense of security and protection to devotees. Lord Hanuman's unwavering devotion to Lord Rama serves as an inspiration for devotees to deepen their own devotion and faith in the divine.
              Lord Hanuman, known as the mighty monkey god, is revered for his unwavering devotion to Lord Rama in Hindu mythology. Born to Anjana and Kesari, Hanuman is believed to be an incarnation of Lord Shiva. His tales of bravery, such as his leap to Lanka in search of Sita and lifting the Sanjeevani mountain to save Lakshmana, are legendary. Hanuman is celebrated for his immense strength, courage, and loyalty. He embodies selflessness and devotion, always putting Lord Rama's welfare above his own. Hanuman is also known as a symbol of determination and resilience, inspiring millions with his devotion and service to humanity. His unwavering faith and ability to overcome adversity make him a beloved figure in Hinduism, revered for his protective powers and ability to dispel evil forces.
              Hanuman was born to Anjana and Kesari, an apsara (celestial nymph) and a vanara (monkey) king respectively. His birth was the result of a boon granted to Anjana by the gods, seeking a son who possessed immense strength and divine powers. As a child, Hanuman was mischievous and playful, often causing trouble in the ashram of his guru, Sage Vishwamitra.
              </p>
              <p>Hanuman's life's purpose unfolded when he encountered Lord Rama during his search for Sita, who had been abducted by the demon king Ravana. Impressed by Hanuman's devotion and determination, Lord Rama accepted him as a devoted ally and friend. Hanuman played a pivotal role in the rescue of Sita, leaping across the ocean to reach Lanka and delivering Lord Rama's message to her.
              Hanuman is revered for his exceptional strength, which allowed him to perform extraordinary feats such as lifting mountains, flying across oceans, and defeating powerful demons. He is often depicted with a mace (gada) in one hand, symbolizing his immense physical prowess and ability to protect devotees from evil forces.
              Devotees of Hanuman chant the Hanuman Chalisa, a devotional hymn composed by the saint Tulsidas, to seek his blessings and protection. Hanuman is also associated with celibacy, selfless service, and unwavering devotion to duty, making him a role model for seekers of spiritual enlightenment and strength.
              </p>
            </div>
          </div>
        )}

        {selectedSection === 'topography' && (
          <div className="section-content">
            <img src={`${process.env.PUBLIC_URL}/image/d5.jpg`} alt="Temple Topography" />
            <div>
              <h2><i>Topography of the Temple Site</i></h2>
              <p>At our Devasthanam, we are dedicated to providing a serene and welcoming environment for all devotees. 
              Our temple architecture reflects traditional designs, adorned with intricate carvings and sacred symbols. 
              Each corner of our Devasthanam resonates with spirituality and divine energy. 
              There are frequently additional buildings and structures in the vicinity of this chamber, 
              with the largest ones covering several acres. In addition to other small temples in the compound, 
              there may be additional mandapas or buildings that are either connected or separate from the larger temples.
               The superstructure of the temple was likely made of mud and other perishable materials. 
               The appropriate site for a Mandir, suggest ancient Sanskrit texts, is near water and gardens, 
               where lotus and flowers bloom, where swans, ducks and other birds are heard, where animals rest without fear of injury or harm.
               Situated on a gentle slope, the temple commands a panoramic view of the surrounding landscape, offering a tranquil oasis for worshippers and seekers alike. Lush greenery envelops the temple grounds, with majestic trees providing shade and shelter to devotees. A winding pathway leads to the main entrance, inviting pilgrims on a journey of introspection and reverence. The temple's architecture harmonizes seamlessly with the natural terrain, 
               featuring intricate carvings and ornate embellishments that reflect the region's cultural heritage.
               Today, Sri Lakshmi Ganapathi Hanumatheeswara Temple stands as not just a place of worship, but a living testament to the enduring faith and cultural heritage of its devotees. It remains a beacon of spirituality, welcoming pilgrims and visitors from around the world to experience its timeless grace and divine energy.
               Sri Lakshmi Ganapathi Hanumatheeswara Temple holds a rich and storied history that dates back several centuries. Situated in a serene setting, this sacred abode is steeped in spiritual significance and cultural heritage. Legends speak of its founding by a revered saint who was guided by divine visions to establish a place dedicated to Lord Ganesha and Lord Hanuman, embodying the essence of devotion, strength, and wisdom.
               </p>
               <p>The temple's architectural layout harmonizes seamlessly with its natural surroundings, reflecting traditional Hindu temple architecture. The main sanctum sanctorum is surrounded by ancillary structures such as mandapas (pillared halls), gopurams (ornate gateways), and prakarams (enclosed precincts), all adorned with intricate carvings and sacred symbols. These architectural elements not only beautify the temple complex but also create a sacred space conducive to spiritual contemplation and worship.
               Ancient Sanskrit texts suggest that a temple should ideally be located near water bodies and gardens where lotus flowers bloom, birds chirp merrily, and animals roam freely without fear. Sri Lakshmi Ganapathi Hanumatheeswara Temple adheres to these principles, with nearby ponds or tanks that enhance the temple's spiritual ambiance. These water bodies serve both practical and symbolic purposes, providing water for rituals and creating a serene atmosphere that enhances the overall spiritual experience for devotees.
               </p>
               <p>A winding pathway leads devotees from the main entrance of the temple through its expansive grounds, inviting them on a journey of introspection and reverence. The pathway is adorned with sacred markers, such as sthambas (pillar-like structures) and vahanas (sacred vehicles), which symbolize different aspects of Hindu mythology and spiritual practice. These pathways not only facilitate movement within the temple complex but also serve as metaphors for the spiritual journey towards enlightenment and divine realization.
               The temple's topography and surroundings contribute significantly to the pilgrimage experience for devotees and visitors. Beyond its religious significance, Sri Lakshmi Ganapathi Hanumatheeswara Temple offers a holistic environment where individuals can connect with nature, meditate in serene surroundings, and participate in religious rituals that foster spiritual growth and inner peace. The combination of natural beauty, architectural splendor, and spiritual sanctity makes the temple a cherished destination for seekers of divine blessings and cultural enrichment.
               Nestled amidst serene surroundings, Sri Lakshmi Ganapathi Hanumatheeswara Temple is situated on a gentle slope that offers panoramic views of the surrounding landscape. The temple grounds are adorned with lush greenery, including towering trees that provide shade and shelter to devotees. The natural beauty of the area enhances the temple's tranquil ambiance, creating a peaceful retreat for worshippers and visitors alike.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
