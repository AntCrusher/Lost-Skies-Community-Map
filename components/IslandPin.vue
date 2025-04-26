<script setup lang="ts">
 import type {IslandDetails} from "~/types/IslandDetails";

 const {islandDetails} = defineProps<{
   islandDetails: IslandDetails
 }>()

 const xPosition = computed(() => `${islandDetails.xPercentage}%`)
 const yPosition = computed(() => `${islandDetails.yPercentage}%`)

 const islandHasArk = computed<"Yes" | "No" | "Unknown">(() => {
   if (islandDetails.ark === undefined) return "Unknown"
   else if (islandDetails.ark) return "Yes"
   return "No"
 })
</script>

<template>
  <div class="absolute" :style="{ left: xPosition, top: yPosition }">

    <UPopover trigger="click">
      <UButton>
        <div class="min-w-15 min-h-15" />
      </UButton>
      <template #content>
        <UCard variant="subtle" class="bg-blue-100 drop-shadow-lg rounded-md px-5 py-3">
          <template #header>
            <h2 class="text-xl">{{islandDetails.name}} - {{islandDetails.id}}</h2>
          </template>

          <template #default>
            <div class="grid grid-cols-[auto_1fr] items-center gap-1 mt-2 max-w-sm break-words">

              <!-- <span title="X Coordinate">X</span>
              <span>{{islandDetails.xCoordinate || "Unknown"}}</span>

              <span title="Y Coordinate">Y</span>
              <span>{{islandDetails.yCoordinate || "Unknown"}}</span> -->

              <img src="/icons/brain.svg" :title="'Databanks'" class="size-5" />
              <span>{{islandDetails.databanks || "Unknown"}}</span>

              <span title="Ark">Ark</span>
              <span>{{islandHasArk}}</span>

              <img src="/icons/altitude.svg" :title="'Altitude'" class="size-5" />
              <span>{{islandDetails.altitude || "Unknown"}}</span>

              <img src="/icons/swords.svg" :title="'Difficulty'" class="size-5" />
              <span>{{islandDetails.difficulty || "Unknown"}}</span>

              <img v-if="islandDetails.metals?.length > 0" src="/icons/pickaxe.svg" :title="'Metals'" class="size-5" />
              <span v-if="islandDetails.metals?.length > 0">{{islandDetails.metals?.join(',')}}</span>

              <img v-if="islandDetails.wood?.length > 0" src="/icons/tree.svg" :title="'Wood Types'" class="size-5" />
              <span v-if="islandDetails.wood?.length > 0">{{islandDetails.wood?.join(',')}}</span>

              <img v-if="islandDetails.plants?.length > 0" src="/icons/leaf.svg" :title="'Plants'" class="size-5" />
              <span v-if="islandDetails.plants?.length > 0">{{islandDetails.plants?.join(',')}}</span>

              <img v-if="islandDetails.items?.length > 0" src="/icons/package.svg" :title="'Items'" class="size-5" />
              <span v-if="islandDetails.items?.length > 0">{{islandDetails.items?.join(',')}}</span>

              <img v-if="islandDetails.animals?.length > 0" src="/icons/paw.svg" :title="'Animals'" class="size-5" />
              <span v-if="islandDetails.animals?.length > 0">{{islandDetails.animals?.join(',')}}</span>

              <img v-if="islandDetails.chestItems?.length > 0" src="/icons/treasure.svg" :title="'Chest Items'" class="size-5" />
              <span v-if="islandDetails.chestItems?.length > 0">{{islandDetails.chestItems?.join(',')}}</span>
            </div>
          </template>

          <template v-if="islandDetails.note" #footer>
            <div class="flex flex-col mt-3">
              <span class="font-bold">Note:</span>
              <p class="max-w-80">
                {{islandDetails.note}}
              </p>
            </div>
          </template>
        </UCard>
      </template>
    </UPopover>
  </div>
</template>

<style scoped>

</style>
