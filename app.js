
let loadoutDisplay = {
    props: ['loadout'],
    data: function () {
        return {
            hackLevel: 1,
            loadoutID: "Loadout"
        }
    },
    methods: {
        getTotalMemory(loadout) {
            return loadout.reduce((total, nxt) => total + nxt.memoryusage, 0)
        },
        getBlockSize(loadout) {
            return Math.ceil(this.getTotalMemory(loadout) / 4)
        },
        getMaxBlox() {
            return Math.ceil(this.hackLevel / 2)
        },
        getTap(loadout) {
            let tap = this.getMaxBlox() - this.getBlockSize(loadout)
            return Math.max(0, tap)
        },
    },
    computed: {
        classObj: function () {
            return {
                memerror: this.getBlockSize(this.loadout) > this.getMaxBlox()
            }
        }
    },
    template: `
        <div id='loadout' class='section big'>
            <div id='loadout-controls'>
                <label id='hacklabel' for='hacklevel'>
                    Hackin'    
                    <select v-model='hackLevel' class='big'>
                        <optgroup label='Basic'>
                            <option :value=1>1</option>
                            <option :value=2>2</option>
                        </optgroup>
                        <optgroup label='Intermediate'>
                            <option :value=3>3</option>
                            <option :value=4>4</option>
                        </optgroup>
                        <optgroup label='Advanced'>
                            <option :value=5>5</option>
                            <option :value=6>6</option>
                        </optgroup>
                        <optgroup label='Larger Than Life'>
                            <option :value=7>7</option>
                        </optgroup>
                    </select>
                </label><br>
                <label id='loadoutid-label' for='change-lid'>
                    Loadout ID
                    <input v-model='loadoutID' type='textbox' id='change-lid' class='big'>
                </label>
            </div>
            <fieldset>
                <legend>{{ loadoutID }}</legend>
                <div>
                    <fieldset id='loadout-list'>
                        <ul>
                            <li v-for='item in loadout'>
                                {{ item.title }}
                                <ul>
                                    <li><em>Memory Usage: {{ item.memoryusage }}</em></li>
                                    <li><em> Functions:</em> {{ item.functions }}</li>
                                    <div v-if='item.tier==6'>
                                        <li><em>Passive</em> {{ item.passive }}</li>
                                        <li><em>Active</em> {{ item.active }}</li>
                                        <li><em>Once</em> {{ item.once }}</li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </fieldset>
                </div>
                <div id='loadout-summary' class='grid-container'>
                    <div class='label'>Total Memory Used</div> <div>{{ getTotalMemory(loadout) }}</div>
                    <div class='label'><span :class='classObj'>Size in Blocks</span></div> <div :class='classObj'>{{ getBlockSize(loadout) }}</div>
                    <div class='label'>Total Number of Blocks for Loadouts</div><div>{{ hackLevel }}</div>
                    <div class='label'>Maximum Size of Any Single Loadout</div><div>{{ getMaxBlox() }}</div>
                    <div class='label'>TAP</div><div>{{ getTap(loadout) }}</div>
                </div>
            </fieldset>
            <button id='printbtn' onclick='window.print()' class='big'>Print Loadout</button>
        </div>
    `
}

let knackSelect = {
    props: ['list'],
    template: `
        <div id='knacks' class='section big'>
            <fieldset>
                <legend>Knacks</legend>
                <li v-for='knack in list'>
                    <label :for='knack.id'>
                        <input type='checkbox' :id='knack.id' :value='knack.display' v-model='$root.chosenKnacks'>
                        {{ knack.display }}
                    </label>
                </li>
            </fieldset>
        </div>
    `
}

let scrInfo = {
    props: ['d'],
    data: function () {
        return {
            selected: this.d[0].list[0],
        }
    },
    methods: {
        updateSelected: function (sel) {
            let [whichList, whichItem] = sel.target.value.split(",")
            this.selected = this.d[whichList].list[whichItem]
        },
        addToLoadout: function () {
            if (this.$root.$data.loadout.indexOf(this.selected) === -1) {
                this.$root.$data.loadout.push(this.selected)
            }
        },
        removeFromLoadout: function () {
            this.$root.$data.loadout = this.$root.$data.loadout.filter(f => f !== this.selected)
        },
        clearLoadout: function () {
            this.$root.resetLoadout()
        }
    },
    template: `
        <div id='info-container' class='section'>
            <fieldset id='info' class='grid-container big'>
                <legend>Script Details</legend>
                <select @change='updateSelected' class='title big'>
                    <optgroup v-for='item in d' :label='item.group'>
                        <option v-for='sc in item.list' :value="d.indexOf(item)+','+item.list.indexOf(sc)">
                            {{ sc.title }}
                        </option>
                    </optgroup>
                </select>
                <button @click='addToLoadout' class='big'>Add to Loadout</button>
                <button @click='removeFromLoadout' class='big'>Remove from Loadout</button>
                <button @click='clearLoadout' class='big'>Clear Loadout</button>
                <div id="title" class="item title">{{ selected.title }} ({{ selected.devpath }})</div>
                <div class="item label">Tier</div><div id="tier" class="item datum"> {{ selected.tier }}</div>
                <div class="item label">Developer</div><div id="developer" class="item datum"> {{ selected.developer }}
                </div>
                <div class="item label">Memory Usage</div><div id="memory" class="item datum">{{ selected.memoryusage }}</div>
                <div class="item label">Codin' Required</div><div id="requirements" class="item datum">{{selected.requirements || "Basic"}}</div>
                <div class="item label">Use Case</div><div id="use" class="item datum">{{ selected.usecase }}</div>
                <div class="item label">Cost</div><div id="cost" class="item datum">{{ selected.cost }} </div>
                <div class="item label">Delivery</div><div id="delivery" class="item datum"> {{ selected.delivery }}</div>
                <div class="item label">Mode</div><div id="mode" class="item datum">{{ selected.mode }}</div>
                <div class="item label">Functions</div><div id="functions" class="item datum"> {{ selected.functions }}
                </div>
                <div v-if="selected.tier==6" class="item label">Passive</div><div id="hotsim-passive" v-if="selected.tier==6"
                    class="item datum">{{ selected.passive }}</div>
                <div v-if="selected.tier==6" class="item label">Active</div><div id="hotsim-active" v-if="selected.tier==6"
                    class="item datum">{{ selected.active }}</div>
                <div v-if="selected.tier==6" class="item label">Once</div><div id="hotsim-once" v-if="selected.tier==6"
                    class="item datum">{{ selected.once }}</div>
            </fieldset>
        </div>
    `
}

let app = new Vue({
    el: '#app',
    data: {
        items: RIPDATA,
        knacks: KNACKS,
        chosenKnacks: [],
        loadout: [
            RIPDATA[0],
            RIPDATA[1],
            RIPDATA[2]
        ],
        scriptList: [
            { group: 'Fundamentals', list: getScriptsOfTier(0) },
            { group: 'Tier 1', list: getScriptsOfTier(1) },
            { group: 'Tier 2', list: getScriptsOfTier(2) },
            { group: 'Tier 3', list: getScriptsOfTier(3) },
            { group: 'Tier 4', list: getScriptsOfTier(4) },
            { group: 'Tier 5', list: getScriptsOfTier(5) },
            { group: 'Tier 6 (HOTSIM)', list: getScriptsOfTier(6) }
        ]
    },
    methods: {
        resetLoadout: function () {
            this.loadout = [
                RIPDATA[0],
                RIPDATA[1],
                RIPDATA[2]
            ]
        },
    },
    components: {
        'scr-info': scrInfo,
        'loadout-display': loadoutDisplay,
        'knack-select': knackSelect
    }
})

