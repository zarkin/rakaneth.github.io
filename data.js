let RIPDATA = [
    {
        tier: 0,
        title: 'Nano-Aggression Inversion\n',
        developer: 'No dev',
        devpath: 'F',
        memoryusage: 0,
        usecase: 'Damage',
        cost: '1 Grit, three seconds of concentration',
        delivery: 'Packet',
        mode: 'Readied; activations equal to Hackin\' level',
        functions: '\'Nano 1\''
    },
    {
        tier: 0,
        title: 'Cloud Traffic Control\n',
        developer: 'No dev',
        devpath: 'F',
        memoryusage: 0,
        usecase: 'Defense',
        cost: '1 Grit, one minute of concentration',
        delivery: 'Self',
        mode: 'Persistent',
        functions: 'Pay 1 Grit to \'Firewall\' any incoming damaging Nano effect with a Magnitude equal to or less than your Hackin\'.'
    },
    {
        tier: 0,
        title: 'Lazarus Failback Protocol\n',
        developer: 'Cobalt Blue, Amnesty, 2296',
        devpath: 'F',
        memoryusage: 0,
        usecase: 'Utility, Restoration',
        cost: '1 Grit, one minute of concentration',
        delivery: 'Self',
        mode: 'Instant',
        functions: 'Use of this Script begins a \'death rescue module\' on uploaded target. This Script can only be activated in the presence of a Marshal, and only if the Hacker possesses a legal belonging of the target\'s or is currently in the target\'s place of permanent residence (cabin/tent). Note that repeated uses on the same target during the same event, even from multiple Hackers, can and will become exponentially more risky, and that uses over time also accumulate some degree of instability.\f'
    },
    {
        tier: 1,
        title: 'Veil of Iron',
        developer: 'Hiram Bains, Amnesty, 2296',
        devpath: 'F.D',
        memoryusage: 1,
        usecase: 'Defense',
        cost: '1 Grit, one minute of concentration',
        delivery: 'Touch',
        mode: 'Instant',
        functions: '\'Grant Nanoshield 3\''
    },
    {
        tier: 1,
        title: 'Nano Buster',
        developer: 'Vermont Carson, Amnesty, 2296',
        devpath: 'F.O',
        memoryusage: 1,
        usecase: 'Offense',
        cost: '1 Grit, no concentration',
        delivery: 'Packet',
        mode: 'Readier; activations equal to Hackin\' level',
        functions: '\'Nano 2;\' last packet is a \'Nano 4\''
    },
    {
        tier: 1,
        title: 'I\'m a Hacker, Not a Doctor',
        developer: 'No dev',
        devpath: 'F.U',
        memoryusage: 1,
        usecase: 'Utility',
        cost: '1 Grit',
        delivery: 'Touch',
        mode: 'Readied; activations equal to Hackin\' level',
        functions: '\'Nano Stabilize 60.\''
    },
    {
        tier: 2,
        title: 'Lumina\'s Coruscating Fury',
        developer: 'Virginia Knights, Amnesty, 2316',
        devpath: 'F.O.O',
        memoryusage: 2,
        usecase: 'Damage',
        cost: '1 Grit, no concentration',
        delivery: 'Packet',
        mode: 'Instant',
        functions: '\'Nano Burst X,\' X is user\'s Hackin\' level times two'
    },
    {
        tier: 2,
        title: 'Fist of Solum',
        developer: 'Virginia Knights, Amnesty, 2316',
        devpath: 'F.O.D',
        memoryusage: 2,
        usecase: 'Disabling',
        cost: '1 Grit, no concentration',
        delivery: 'Packet',
        mode: 'Instant',
        functions: '\'Nano Bind X,\' X is user\'s Hackin\' level'
    },
    {
        tier: 2,
        title: 'Specter Resolution Interrogative',
        developer: 'Yang, Amnesty, 2316',
        devpath: 'F.O.U',
        memoryusage: 2,
        usecase: 'Damage',
        cost: '1 Grit',
        delivery: 'Packet',
        mode: 'Readied, activations equal to double Hackin\' level',
        functions: 'This Script manifests double the user\'s Hackin\'s level in \'Echo Nano 3\'s, which only harm Echo targets.'
    },
    {
        tier: 2,
        title: 'Nano-Corporeal Transfer Protocol',
        developer: 'Cobalt Blue, Amnesty, 2296',
        devpath: 'F.U.D',
        memoryusage: 2,
        usecase: 'Utility',
        cost: '1 Grit',
        delivery: 'Packet, after three seconds of concentration',
        mode: 'Readied; activations equal to Hackin\' level',
        functions: 'Each use of this Script produces a \'Nano Relocate.\' Upon landing, the user must loudly declare \'Download Complete!\' and cannot act for three seconds as their body fully reforms, though they are fully vulnerable during this time. Additionally, nothing other than one\'s Factotum may be held in-hand while this Script is Active or all additional uses are lost.'
    },
    {
        tier: 2,
        title: 'Tesseract Clip Kata',
        developer: 'Yang, Amnesty, 2317',
        devpath: 'F.U.O',
        memoryusage: 2,
        usecase: 'Enhancement',
        cost: '1 Grit',
        delivery: 'Touch',
        mode: 'Readied, activations equal to Hackin\' level',
        functions: 'This Script manifests the user\'s Hackin\' level in \'Nano Reload 2\' effects. A given target cannot receive this benefit more than once per Dispersal period.'
    },
    {
        tier: 2,
        title: 'Asymmetric-Mandala/Compiler',
        developer: 'Yang, Amnesty, 2316',
        devpath: 'F.U.U',
        memoryusage: 2,
        usecase: 'Detection',
        cost: '1 Grit, one minute concentration',
        delivery: 'Self',
        mode: 'Instant',
        functions: 'Upon execution, the Hacker selects a subject. The Script will provide them with a series of somewhat nonsensical phrases that provide limited insight on the matter. Those nearby can hear the words as well -- because they are spoken by the hacker themselves, whose body is manipulated by the surging nanites. At the end of the process, the Hacker suffers a one-minute Mental Melancholy as their central nervous system copes with the overload of sensory data. This Script becomes increasingly dangerous to use for each application by a given hacker after the first per event.'
    },
    {
        tier: 2,
        title: 'The Legion\'s Bulwark',
        developer: 'Hiram Bains, Amnesty, 2296',
        devpath: 'F.D.D',
        memoryusage: 2,
        usecase: 'Defense',
        cost: '1 Grit, one minute of concentration',
        delivery: 'Touch, requiring three seconds of concentration',
        mode: 'Readied, activations equal to Hackin\' level',
        functions: '\'Grant Nanoshield 2\'',
        special: 'Activations cannot be expended on a target who has received this Script\'s benefit from anyone until the target takes a Rest.'
    },
    {
        tier: 2,
        title: 'Aura\'s Electromagnetic Guard',
        developer: 'Virginia Knights, Driftwood, 2316',
        devpath: 'F.D.U',
        memoryusage: 2,
        usecase: 'Defense',
        cost: '1 Grit',
        delivery: 'Touch',
        mode: 'Readied; activations equal to your Hackin\' level',
        functions: 'The Hacker may bestow a target with a Firewall to be used against any Unload effect that would target them. The Firewall can be used up to three times, though if any uses are expended, the Script concludes upon Rest.',
        special: 'Activations cannot be expended on a target who has received this Script\'s benefit from you until you Rest.'
    },
    {
        tier: 3,
        title: 'Aura\'s Swift Talons',
        developer: 'Virginia Knights, Amnesty, 2316',
        devpath: 'F.O.O.O',
        memoryusage: 3,
        usecase: 'Damage',
        cost: '1 Grit, no concentration',
        delivery: 'Packet',
        mode: 'Readied; activations equal to Hackin\' level',
        functions: '\'True Nano 2\'',
        requirements: 'Intermediate'
    },
    {
        tier: 3,
        title: 'Lumina\'s Hallowed Blade',
        developer: 'Virginia Knights, Amnesty, 2316',
        devpath: 'F.O.D.O',
        memoryusage: 3,
        usecase: 'Damage',
        cost: '1 Grit, one minute of concentration',
        delivery: 'Self',
        mode: 'Instant',
        functions: 'The user may summon an appropriate Spike for their Hackin\' level, as per Deep Dive rules. If the user has Advanced Codin\', they also gain the use of their Hackin\' level in \'Nano Strike 2\'s with the Spike. The Script can be reused to replenish these Nano Strikes without dissolving the physical-Spike, though this can be done no more than once before the user completes a Rest.',
        requirements: 'Intermediate'
    },
    {
        tier: 3,
        title: 'Thermodynamic Interchange Protocol',
        developer: 'Cobalt Blue, Amnesty, 2296',
        devpath: 'F.U.D.O',
        memoryusage: 3,
        usecase: 'Disabling',
        cost: '1 Grit',
        delivery: 'Packet',
        mode: 'Readied; activations equal to Hackin\' level',
        functions: 'Each use of this Script produces a \'Nano Unload 2\' effect. Whenever the target takes this effect (that is, any time you hit a target and they do not call a defense or immunity of any sort), you recover 1 Bullet Count.',
        requirements: 'Intermediate'
    },
    {
        tier: 3,
        title: 'Flesh of Shale',
        developer: 'Hiram Bains, Amnesty, 2296',
        devpath: 'F.D.D.D',
        memoryusage: 3,
        usecase: 'Defense',
        cost: '1 Grit',
        delivery: 'Touch, requiring three seconds of concentration',
        mode: 'Readied, activations equal to Hackin\' level',
        functions: 'The target gains one Firewall to be used against any numerical damaging effect of 4 or less.',
        requirements: 'Intermediate',
        special: 'Activations cannot be expended on a target who has received this Script\'s benefit from you until you Rest.'
    },
    {
        tier: 3,
        title: 'Solum\'s Enduring Will',
        developer: 'Virginia Knights, Amnesty, 2317',
        devpath: 'F.D.U.D',
        memoryusage: 3,
        usecase: 'Defense',
        cost: '1 Grit',
        delivery: 'Touch',
        mode: 'Readied',
        functions: 'Each use of this Script grants one Firewall against any Mental effect.',
        requirements: 'Intermediate',
        special: 'Activations cannot be expended on a target who has received this Script\'s benefit from you until you Rest.'
    },
    {
        tier: 3,
        title: '[Satori]Superposition.Collapse',
        developer: 'Yang, Amnesty, 2316',
        devpath: 'F.U.U.U',
        memoryusage: 3,
        usecase: 'Detection',
        cost: '1 Grit',
        delivery: 'Self',
        mode: 'Instant',
        functions: 'Upon execution, the Hacker places an effect on themselves, granting a free Insight in any investigation. The Insight, however, is not directed by the Hacker; a search algorithm gathers and provides some sort of relevant information on the topic at hand. This Insight activates automatically and only at the end of an Investigation.',
        requirements: 'Intermediate'
    },
    {
        tier: 4,
        title: 'Schturdark\'s Unyielding Torrent',
        developer: 'Virginia Knights, Amnesty, 2316',
        devpath: 'F.O.O.O.O',
        memoryusage: 5,
        usecase: 'Damage',
        cost: '1 Grit',
        delivery: 'Self',
        mode: 'Instant',
        functions: 'User may produce unlimited \'Nano 2\' packets. They must remain empty-handed and wield nothing other than their factotum, however. Each packet requires 3 seconds of concentration to deliver, during which time the hacker cannot move without losing focus. Defense taglines can still be used. ',
        requirements: 'Intermediate'
    },
    {
        tier: 4,
        title: 'Venerated Blade of Defense',
        developer: 'Virginia Knights, Amnesty, 2317',
        devpath: 'F.O.D.O.D',
        memoryusage: 5,
        usecase: 'Damage, Defense',
        cost: '1 Grit, one minute concentration',
        delivery: 'Self',
        mode: 'Instant',
        functions: 'The user may summon an appropriate Spike for their Hackin\' level, as per Deep Dive rules if they have not already. The user also gains the use of a single \'Parry\' while wielding a Spike against a numerical damaging melee attack. After such a Parry, the Hacker may deliver a \'Nano Strike X\' with the Spike in response, where X is their Hackin\' level. The Script can be reused to replenish this Parry and its riposte without dissolving the physical-Spike, though this can be done no more than once before the user completes a Rest (the initial activation counts against the user as a recharge). If the user has already summoned a Spike through another effect, they may apply the second effect of this Script to that already-existing Spike.',
        requirements: 'Intermediate'
    },
    {
        tier: 4,
        title: 'Ignis\'s Rending Claw',
        developer: 'Virginia Knights, Amnesty, 2316',
        devpath: 'F.O.D.O.O',
        memoryusage: 5,
        usecase: 'Damage',
        cost: '1 Grit',
        delivery: 'Packet',
        mode: 'Instant',
        functions: 'After loudly announcing the Script\'s name and pointing out their target, then after concentration, \'Nano Weapon Break X.\' X is the user\'s Hackin\' level.',
        requirements: 'Intermediate'
    },
    {
        tier: 4,
        title: 'Clockwise Counter',
        developer: 'Smiling_Gun_Killer, Amnesty, 2316',
        devpath: 'F.D.D.D.D',
        memoryusage: 5,
        usecase: 'Defense',
        cost: '1 Grit, one minute concentration',
        delivery: 'Self',
        mode: 'Persistent',
        functions: 'Whilst active, the Hacker may spend 1 Grit to negate any Nano-sourced effect, calling \'Firewall.\'',
        requirements: 'Intermediate'
    },
    {
        tier: 4,
        title: 'Cry of Phoenix',
        developer: 'Virginia Knights, Amnesty, 2317',
        devpath: 'F.D.O.U.D',
        memoryusage: 5,
        usecase: 'Utility',
        cost: '1 Grit',
        delivery: 'Touch',
        mode: 'Readied',
        functions: 'Each use of this Script grants one Firewall against Slow, Bind, Shackle, or Paralysis. As a bonus, the bearer of that Firewall gain +1 maximum Vitality; the Vitality fades during the next Rest after the Firewall is expended.',
        requirements: 'Intermediate',
        special: 'Activations cannot be expended on a target who has received this Script\'s benefit from you until you Rest.'
    },
    {
        tier: 4,
        title: 'Earth Guardian\'s Blessing',
        developer: 'Virginia Knights, Driftwood, 2317',
        devpath: 'F.D.U.D.U',
        memoryusage: 5,
        usecase: 'Defensive',
        cost: '1 Grit',
        delivery: 'Touch',
        mode: 'Readied',
        functions: 'Each activation of this Script grants the recipient a Resist to any Fire, Lightning, or Ice Sourced effect. Other \'elements\' may also be affected by this with a tactical Investigation.',
        requirements: 'Intermediate',
        special: 'Activations cannot be expended on a target who has received this Script\'s benefit from you until you complete a Habit.'
    },
    {
        tier: 4,
        title: 'Machine|Elf Proxy Interface',
        developer: 'Yang, Amnesty, 2316',
        devpath: 'F.U.U.U.U',
        memoryusage: 5,
        usecase: 'Detection',
        cost: '1 Grit, one minute concentration',
        delivery: 'Self',
        mode: 'Instant',
        functions: 'Upon execution, the Hacker conjures an Echo with detailed knowledge on a specific, concrete Person, Place, or Thing. The Echo is generally cooperative, though its cognition is limited, and it may struggle to process queries with too many operators or too much complexity. The Echo disperses after receiving queries equal to the users Hackin\' level; these queries can be delivered by the Hacker or by any other character that the Hacker touches and says \'Query Permissions Enabled.\' This Script becomes increasingly dangerous to use for each application by a given hacker after the first per an event.',
        requirements: 'Intermediate'
    },
    {
        tier: 5,
        title: 'Bull Run Barrier',
        developer: 'No dev',
        devpath: 'F.D.D.D.D.D',
        memoryusage: 8,
        usecase: 'Defense',
        cost: '1 Grit',
        delivery: 'Self',
        mode: 'Persistent',
        functions: 'Once activated, this Script provides the user\'s Hackin\' level in activations. Each Activation can be spend to call \'Firewall\' against a single basic physical attack (no-call melee or projectile attack).',
        requirements: 'Advanced',
        special: 'This Script can be initialized only once per Dispersal period. The user may ignore this restriction at the cost of 1 Toxicity.'
    },
    {
        tier: 5,
        title: 'Gentle Dryad\'s Blessing',
        developer: 'No dev',
        devpath: 'F.D.U.D.D.D',
        memoryusage: 8,
        usecase: 'Defense',
        cost: '1 Grit',
        delivery: 'Touch',
        mode: 'Readied / Instant',
        functions: 'Once activated, this Script provides the user\'s Hackin\' level in activations. Each Activation can be spend to grant a willing target a Firewall against any Toxicity, Withering, Sickness, Weakness, or Chemical-sourced numerical damaging effect.',
        requirements: 'Advanced',
        special: 'Activations cannot be expended on a target who has received this Script\'s benefit from you until you Rest. This does not impact the Instant version.'
    },
    {
        tier: 5,
        title: 'Umbra\'s Twilight Slash',
        developer: 'Virginia Knights, Driftwood, 2316',
        devpath: 'F.O.O.O.O.O',
        memoryusage: 8,
        usecase: 'Damage',
        cost: '1 Grit',
        delivery: 'Packet',
        mode: 'Instant',
        functions: 'The Hacker merely delivers a \'Nano Mortal Burst.\' Afterwards, the user gains 3 \'Nano 6\' packet attacks.',
        requirements: 'Advanced'
    },
    {
        tier: 5,
        title: 'Venerated Blade of Retribution',
        developer: 'Virginia Knights, Driftwood, 2317',
        devpath: 'F.O.D.O.D.O',
        memoryusage: 8,
        usecase: 'Damage',
        cost: '1 Grit, one minute concentration',
        delivery: 'Self',
        mode: 'Persistent',
        functions: 'The user may summon an appropriate Spike for their Hackin\' level, as per Deep Dive rules if they have not already. The user also gains the use of a single \'Nano Reflect\' against a melee attack while wielding a Spike against a numerical damaging melee attack. The Script can be reused to replenish this Reflect without dissolving the physical-Spike, though this can be done no more than once before the user completes a Rest (the initial activation counts against the user as a recharge). If the user has already summoned a Spike through another effect, they may apply the second effect of this Script to that already-existing Spike.',
        requirements: 'Advanced'
    },
    {
        tier: 5,
        title: 'Experimental Loop Interdiction',
        developer: 'Yang, Amnesty, 2317',
        devpath: 'F.U.U.U.U.U',
        memoryusage: 8,
        usecase: 'Defense',
        cost: '1 Grit, one minute concentration',
        delivery: 'Self',
        mode: 'Instant',
        functions: 'Once activated, this Script will \'hang\' on the Hacker until they encounter a potential Consequence during Freestyle Science. At that point, the Script will predict the dangerous Consequence and preempt the action taken during Freestyle Science, giving the user an opportunity to change course. After this \'do-over,\' the Script is expended.',
        requirements: 'Advanced'
    },
    {
        tier: 5,
        title: 'Schturdark\'s Everlasting Vigor',
        developer: 'Virginia Knights, Driftwood, 2318',
        devpath: 'F.D.U.D.U.D',
        memoryusage: 8,
        usecase: 'Restoration',
        cost: '1 Grit',
        delivery: 'Touch',
        mode: 'Readied',
        functions: 'Once activated, this Script provides the user\'s Hackin\' level in activations. Each Activation can be spent to use a \'Nano Purge Limb Wound.\'',
        requirements: 'Advanced',
        special: 'Activations cannot be expended on a target who has received this Script\'s benefit from you until you complete a Rest.'
    },
    {
        tier: 6,
        title: 'Crescent Moonlight Rune',
        developer: 'Virginia Knights',
        devpath: 'F.O.O.O.O.O.O',
        memoryusage: 12,
        usecase: 'Damage',
        cost: '1 Grit',
        delivery: 'Special',
        mode: 'Special (HOTSIM)',
        functions: 'Once brought online, this Script tracks nearby combat situations and, in real time, generates effects tailored to neutralizing all opposing forces. ',
        requirements: 'Advanced',
        passive: 'The Hacker may deliver this Script\'s Magnitude in \'Nano 6\' melee attacks with any melee weapon. The Hacker may manifest or de-manifest a Spike phys-rep at will (though it does not gain the effects of Lumina\'s Hallowed Blade). The Hacker\'s Spike phys-rep is immune to Disarm and Weapon Break effects, as the HOTSIM Script instantly de- and re-manifests the Spike in response. The Hacker may also produce an unlimited number of packet-delivered \'Nano 1\' effects and/or \'Nano Strike 2\' melee effects.',
        active: 'The Hacker may pay 1 Grit to copy a melee attack which was attempted against them in the last few seconds, in addition to any costs that may have been paid to weather that attack. This is called as \'Nano [tagline],\' with Nano replacing the Source of the originating attack.',
        once: 'The Hacker may call Nano Vengeance X, where X is double this Script\'s Magnitude, against any melee attack which strikes them.'
    },
    {
        tier: 6,
        title: 'Starlight Aegis Rune',
        developer: 'Virginia Knights, Driftwood, 2317',
        devpath: 'F.D.U.D.D.D.D',
        memoryusage: 12,
        usecase: 'Defense',
        cost: '1 Grit',
        delivery: 'Special',
        mode: 'Special (HOTSIM)',
        functions: 'Once brought online, this Script creates a large zone within which the Hacker\'s allies are protected from hostile Nano effects. Before activating this Script, the Hacker must place a minimum of four sigils representing their personal style around the area to be protected. If the target area is a building, these sigils should be placed above every possible entrance, with additional sigils required if more than four entrances are present, and with any extra sigils from the basic requirement of four placed roughly equidistant between the threshold sigils. If the target area is out of doors, a light rope that is green or blue in color should be used and the sigils placed beneath the light rope. Note that these protective symbols can be installed ahead of time without issue.',
        requirements: 'Advanced',
        special: 'Once brought online, the Hacker must remain within the area of effect in order to maintain its power. Excursions are allowed for up to one minute (and for out of play concerns like using the bathroom).',
        passive: 'The Hacker and all allies within the area gain one free Firewall against any incoming Nano effect.',
        active: 'The Hacker may spend 1 Grit to call \'Voice Effect Refresh HOTSIM Firewall,\' restoring the Firewall provided by this Script to any who have made use of it already.',
        once: 'The Hacker may call one \'Voice Effect Grant Nanoshield 8\' immediately upon running the HOTSIM Script.'
    },
    {
        tier: 6,
        title: 'Celestial Light Rune',
        developer: 'Virginia Knights, Driftwood, 2317',
        devpath: 'F.O.D.O.D.O.D',
        memoryusage: 12,
        usecase: 'Damaging, Defense',
        cost: '1 Grit',
        delivery: 'Special',
        mode: 'Special (HOTSIM)',
        functions: 'Once brought online, this Script synchronizes offensive and defensive algorithms, interlinking them in a nested loop to allow each to feed off of the other for a well-rounded battle-ready state.',
        requirements: 'Advanced',
        passive: 'The Hacker may freely wield two three-foot-long Spike phys reps for the duration of the Script. They should be decorated in a complementary manner, such as with contrasting or matching colors and designs, though this is not an explicit requirement. Whenever they spend a resource derived from either their own melee combat skill or the Hackin\' skill, including Grit or activations of Readied Scripts, they gain another free instance of the resulting effect. They may only have \'active\' one such free effect and must expend their current one before accumulating another or find it lost. For example, if the Hacker uses Nimble Hands to Parry an attack, they may Parry another such attack for free, but only if they use no other eligible resource in between the two Parries.',
        active: 'The Hacker may spend 1 Grit to generate their Hackin\' level in \'Nano Weakness Strike\' effects to be delivered with their Spikes. They may instead spend these activations for \'Nano Strike 3\' effects. As an explicit modification to the Passive of this Script, activations of one mode of this effect can produce a \'free\' instance of the other mode, rather than of the same effect.',
        once: 'The Hacker may call one \'Reflect\' against any melee delivered attack, or against any Nano-Sourced packet delivered attack.'
    },
    {
        tier: 6,
        title: 'Stonewall\'s Cloak of Glory',
        developer: 'Irving, Driftwood, 2317',
        devpath: 'F.D.D.D.D.D.D',
        memoryusage: 12,
        usecase: 'Defense',
        cost: '1 Grit',
        delivery: 'Special',
        mode: 'Special (HOTSIM)',
        functions: 'Once brought online, this Script monitors the vital status of nearby allies and prompts the user with analytical suggestions on how to intercept enemy attacks. It grants the follow effects:',
        requirements: 'Advanced',
        passive: 'The Hacker may call an unlimited number of Ally Redirects, with the effect in question unable to be resisted. They also gain unlimited Resists against any enemy effects dealing exactly 1 damage, regardless of source or delivery, though note these is not compatible with Redirection. Finally, they may mundanely block any packet-delivered effect with a melee weapon, including a Spike phys-rep.',
        active: 'The Hacker may pay 1 Grit to call a \'Firewall\' against any offensive effect. They may also pay 1 Grit to call an \'Ally Firewall\' against an numerical offensive effect that strikes an Ally within arm\'s reach of them. Finally, they may spend 1 Grit to \'Grant Nanoshield 8\' on themselves.',
        once: 'The Hacker may call No Effect to one effect delivered in battle, including an Unstoppable one. This does not cover effects that represent environmental hazards, dangers found in Freestyle Science, traps, physical challenges, or anything else -- only attacks delivered by a discrete foe.'
    }
]

function getScriptsOfTier(tier) {
    return RIPDATA.filter(sc => sc.tier === tier)
}

function isDetection(scr) {
    return scr.usecase.includes('Detection')
}

function isUtility(scr) {
    return scr.usecase.includes('Utility')
}

function isDamage(scr) {
    return scr.usecase.includes('Damage')
}

function isEnhancement(scr) {
    return scr.usecase.includes('Enhancement')
}

function isDefense(scr) {
    return scr.usecase.includes('Defense')
}

function isDisabling(scr) {
    return scr.usecase.includes('Disabling')
}

let KNACKS = [
    {
        id: "lote",
        display: "Listen to the Echoes"
    },
    {
        id: "pe",
        display: "Precision Engineering"
    },
    {
        id: "sa",
        display: "System Administrator"
    },
    {
        id: "beard",
        display: "Beard"
    },
    {
        id: "wf",
        display: "Weaponized Factotum"
    },
    {
        id: "overclocker",
        display: "Overclocker"
    },
    {
        id: "am",
        display: "Agile Methodology"
    },
    {
        id: "sideloader",
        display: "Sideloader",
    },
    {
        id: "cm",
        display: "Code Monkey"
    }
]