import React from 'react';

export const PetAdvice = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div>
          <h1 className="text-xl font-bold">Pet Adoption Checklist: 10 Things to Consider Before Adopting a Pet</h1>
          
          <img
            src="../../../uploads/adoptionAdvice.webp" // Replace this with your image URL
            alt="Pet Adoption"
            className="mb-4 w-full h-auto" // Responsive image
          />
          <p>So this is it: you’re ready to adopt. Or are you? Adopting a pet is a long-term commitment; you’ll be responsible for another life, and you have to be ready to take on whatever that entails. Before filling out that adoption paperwork, be sure you’ve thought through all the variables. Here are ten things to consider before adopting a pet.</p>

          <h3 className="text-lg font-semibold mt-4">What to Expect When Adopting a New Pet</h3>
          <p>Pet parenthood will inevitably alter your life, and you’re probably wondering how to prepare for a dog, cat, or other pet to change your lifestyle. Here are some changes you can expect:</p>
          <ul className="list-disc list-inside">
            <li><strong>Routine:</strong> Instead of hitting the snooze button, you’ll need to walk the dog, serve meals, and manage potty breaks.</li>
            <li><strong>Budget:</strong> Expect expenses like food, vet care, grooming, and other costs.</li>
            <li><strong>Lifestyle:</strong> If you rent, ensure your landlord allows pets — now and in future rentals.</li>
          </ul>

          <blockquote className="italic my-4">
            “This is a big decision and a 16-plus-year commitment,” says Julie Sinaw, president and founder of Animal Lighthouse Rescue in New York City. “Make sure you’re ready for that commitment. Adopting a pet is a lot of work, as well as a large financial and time commitment. If you are ready for a commitment, there is no greater love than that of a cat or dog.”
          </blockquote>

          <h3 className="text-lg font-semibold mt-4">Where Can I Adopt a Pet?</h3>
          <p>You can use Adopt a Pet’s Find a Pet search tool to see adoptable pets near you. You can also check local shelter or rescue organization websites.</p>

          <h3 className="text-lg font-semibold mt-4">What Types of Pets Are Available for Adoption?</h3>
          <p>Many types of pets are available for adoption. While the most commonly adopted pets are cats and dogs, some shelters also offer:</p>
          <ul className="list-disc list-inside">
            <li>Rabbits</li>
            <li>Guinea pigs</li>
            <li>Birds</li>
            <li>Reptiles</li>
          </ul>

          <p>There are also rescue organizations specializing in rehabilitating and adopting out farm animals and exotic pets.</p>

          <h3 className="text-lg font-semibold mt-4">Benefits of Adopting From a Shelter or Rescue</h3>
          <p>Adopting from a shelter or rescue organization saves lives. Adoption fees are usually much lower than breeder fees, and pets are often already spayed/neutered, vaccinated, and microchipped.</p>

          <h3 className="text-lg font-semibold mt-4">What to Consider Before Adopting</h3>
          <p>Knowing what to expect can make the transition smoother. Here are ten things to consider:</p>
          <ol className="list-decimal list-inside">
            <li><strong>Landlord permission:</strong> Make sure your landlord allows pets before adopting.</li>
            <li><strong>Adjust your schedule:</strong> Pets need care and companionship, so schedule accordingly.</li>
            <li><strong>Privacy:</strong> Pets may accompany you even to the bathroom — privacy is a thing of the past!</li>
            <li><strong>Costs:</strong> Budget for food, vet care, grooming, and more.</li>
            <li><strong>Don't adopt on a whim:</strong> Take time to think through this long-term commitment.</li>
            <li><strong>Prepare for mess:</strong> Pets can create messes like poop and vomit, so be prepared.</li>
            <li><strong>Pet hair:</strong> Expect pet hair everywhere — embrace it!</li>
            <li><strong>Older animals:</strong> Older pets make great companions, so don’t overlook them.</li>
            <li><strong>Socialization:</strong> Dogs need socialization and training to thrive.</li>
            <li><strong>Pet-proof your home:</strong> Make necessary changes to ensure your home is safe for a pet.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-4">Commonly Asked Questions</h3>
          <h4 className="font-semibold mt-2">Why should I consider adopting a pet instead of buying one?</h4>
          <p>Adopting saves lives and gives pets a chance at a happy life. Plus, it's more affordable than buying from breeders.</p>

          <h4 className="font-semibold mt-2">What are the essential factors to consider before adopting?</h4>
          <p>Consider the long-term costs and how your schedule will change before adopting a pet.</p>

          <h4 className="font-semibold mt-2">Where can I adopt a pet?</h4>
          <p>Use Adopt a Pet’s search tool to find adoptable pets near you.</p>

          <h4 className="font-semibold mt-2">What types of pets are available?</h4>
          <p>Besides cats and dogs, shelters often have rabbits, guinea pigs, and birds available for adoption.</p>

          <h4 className="font-semibold mt-2">What are the benefits of adopting from a shelter?</h4>
          <p>Adopting saves lives and makes space for shelters to rescue more pets in need.</p>

          <h4 className="font-semibold mt-2">How do I ensure a successful adoption?</h4>
          <p>Think through all the factors involved in pet ownership and be prepared to care for a pet for their entire life.</p>
       
        </div>

      </div>
    </div>
  );
};


